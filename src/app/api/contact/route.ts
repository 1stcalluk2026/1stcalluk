import { NextResponse } from "next/server";
import { writeClient } from "../../../../sanity/lib/writeClient";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // 1. Extract the phone along with other fields
    const { name, email, phone, message, captchaToken } = await request.json();

    // 2. Validate input and presence of token
    if (!name || !email || !phone || !message || !captchaToken) {
      return NextResponse.json(
        { success: false, error: "Missing required fields or captcha" },
        { status: 400 }
      );
    }

    // 3. VERIFY WITH GOOGLE
    const verifyResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
      { method: "POST" }
    );

    const verifyData = await verifyResponse.json();

    if (!verifyData.success) {
      console.error("reCAPTCHA validation failed:", verifyData["error-codes"]);
      return NextResponse.json(
        { success: false, error: "Captcha verification failed" },
        { status: 400 }
      );
    }

    // --- If we reach here, the user is human! ---

    // 4. Save to Sanity (Ensure your schema has a 'phone' field)
    await writeClient.create({
      _type: "contactMessage",
      name,
      email,
      phone, // Added phone here
      message,
      submittedAt: new Date().toISOString(),
    });

    // 5. Send admin notification (Including phone number)
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`.trim(),
    });

    // 6. Auto-reply to user
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: email,
      subject: "We received your message",
      text: `Hi ${name},\n\nThank you for contacting 1st Call UK. We will reply within two working days.`.trim(),
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("❌ Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}