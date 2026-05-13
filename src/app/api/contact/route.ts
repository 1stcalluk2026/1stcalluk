import { NextResponse } from "next/server";
import { writeClient } from "../../../../sanity/lib/writeClient";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // 1. Extract all fields from the form
    const { name, email, phone, referral, referralOther, message, captchaToken } = await request.json();

    // 2. Validate input and presence of token
    if (!name || !email || !phone || !message || !captchaToken) {
      return NextResponse.json(
        { success: false, error: "Missing required fields or captcha" },
        { status: 400 }
      );
    }

    // Determine the source string
    const source = referral === "Other" ? `Other: ${referralOther}` : referral;

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

    // 4. Save to Sanity
    await writeClient.create({
      _type: "contactMessage",
      name,
      email,
      phone,
      referral: source, // Added referral to Sanity
      message,
      submittedAt: new Date().toISOString(),
    });

    // 5. Send admin notification (Professional Lead Report)
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      replyTo: email, 
      subject: `New Lead: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #333;">
          <div style="background-color: #2d459c; padding: 10px 20px; color: white; border-radius: 8px 8px 0 0;">
            <h3 style="margin: 0;">New Website Enquiry</h3>
          </div>
          
          <div style="padding: 20px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 8px 8px;">
            <p style="font-size: 14px; color: #666; margin-top: 0;">A new contact form was submitted. Here are the details:</p>
            
            <table style="width: 100%; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; width: 150px;"><strong>Name:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;"><strong>Email:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;">
                  <a href="mailto:${email}" style="color: #2d459c; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;"><strong>Phone:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;">
                  <a href="tel:${phone}" style="color: #2d459c; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;"><strong>Source:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;">${source || "Not specified"}</td>
              </tr>
            </table>

            <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #2d459c; margin-bottom: 20px;">
              <strong style="display: block; margin-bottom: 5px;">Message:</strong>
              <p style="margin: 0; white-space: pre-wrap; line-height: 1.5;">${message}</p>
            </div>

            <p style="font-size: 12px; color: #999;">
              Submitted on: ${new Date().toLocaleString('en-GB', { timeZone: 'UTC' })} (UTC)
            </p>
          </div>
        </div>
      `.trim(),
    });

    // 6. Auto-reply to user
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: email,
      subject: "Confirmation: We received your message",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333333; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; }
            .header-bar { height: 4px; background-color: #2d459c; border-radius: 4px 4px 0 0; margin: -20px -20px 20px -20px; }
            .content { padding: 10px 0; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eeeeee; }
            .logo-table { width: 100%; border-collapse: collapse; margin-bottom: 15px; }
            .details { font-size: 12px; color: #666666; text-align: center; }
            .regulation { font-size: 10px; color: #999999; text-align: center; margin-top: 10px; text-transform: uppercase; letter-spacing: 0.5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header-bar"></div>
            <div class="content">
              <h2 style="color: #2d459c; margin-top: 0;">Hi ${name},</h2>
              <p>Thank you for contacting <strong>1st Call UK Immigration Services</strong>.</p>
              <p>We have successfully received your enquiry. Our senior immigration advisor, James, or a member of our team will review your message and reply within <strong>two working days</strong>.</p>
              
              <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <p style="margin: 0; font-size: 13px; color: #555;"><strong>Your Message Summary:</strong></p>
                <p style="margin: 5px 0 0 0; font-style: italic; font-size: 14px;">"${message.substring(0, 150)}${message.length > 150 ? '...' : ''}"</p>
              </div>
            </div>

            <div class="footer">
              <table class="logo-table">
                <tr>
                  <td align="left" style="width: 50%;">
                    <img src="https://www.1stcalluk.com/1st-calluk-logo02.jpg" alt="1st Call UK Logo" height="45" style="display: block; border-radius: 8px;" >
                  </td>
                  <td align="right" style="width: 50%;">
                    <img src="https://www.1stcalluk.com/IAA-logo.jpg" alt="IAA Logo" height="45" style="display: block; border-radius: 8px;" >
                  </td>
                </tr>
              </table>
              
              <div class="details">
                <strong>Principal Advisor:</strong> James Ramowski<br>
                <strong>Office Address:</strong> The Old Coach House, 25 Noel Street, Nottingham, NG7 6AQ<br>
                <strong>Tel:</strong> +44 (0) 115 8453325
              </div>

              <div class="regulation">
                1st Call Immigration Services is authorised and regulated by the Immigration Advice Authority<br>
                Ref No: F200800049
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
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