import { NextResponse } from "next/server";
import { writeClient } from "../../../../sanity/lib/writeClient";
import { Resend } from "resend";
import { forwardPortalEnquiry } from "../../../../lib/forwardPortalEnquiry";

const resend = new Resend(process.env.RESEND_API_KEY);

const SITE_NAME = "1st Call UK Immigration Services";
const SITE_URL = "https://www.1stcalluk.com";
const CONTACT_EMAIL = "info@1stcalluk.com";
const CONTACT_PHONE = "0115 845 0000";
const CONTACT_PHONE_HREF = "+441158450000";
const CONTACT_ADDRESS = "The Old Coach House, 25 Noel Street, Nottingham NG7 6AQ";
const TEST_NOTIFY_EMAIL = "getu4ever@gmail.com";
const IMMIGRATION_PHONE = "0115 845 3325";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function companyFooterText(extraLines: string[] = []): string {
  return [
    SITE_NAME,
    CONTACT_ADDRESS,
    CONTACT_EMAIL,
    CONTACT_PHONE,
    ...extraLines,
  ].join("\n");
}

function companyFooterHtml(extraHtml = "") {
  return `<tr>
    <td style="padding:20px 24px;background:#f8fafc;border-top:1px solid #e5e7eb;text-align:center;font-size:13px;line-height:1.7;color:#4b5563;">
      <strong style="color:#2d459c;">${escapeHtml(SITE_NAME)}</strong><br />
      ${escapeHtml(CONTACT_ADDRESS)}<br />
      <a href="mailto:${CONTACT_EMAIL}" style="color:#2d459c;text-decoration:none;">${CONTACT_EMAIL}</a>
      &nbsp;·&nbsp;
      <a href="tel:${CONTACT_PHONE_HREF}" style="color:#2d459c;text-decoration:none;">${CONTACT_PHONE}</a><br />
      <a href="${SITE_URL}" style="color:#6b7280;text-decoration:none;">${SITE_URL.replace("https://", "")}</a>
      ${extraHtml}
    </td>
  </tr>`;
}

function emailShell(title: string, body: string, footerExtraHtml = "") {
  return `<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:24px;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;color:#111827;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;">
    <tr>
      <td style="background:#2d459c;padding:20px 24px;color:#ffffff;">
        <p style="margin:0;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;opacity:0.85;">${escapeHtml(SITE_NAME)}</p>
        <h1 style="margin:8px 0 0;font-size:20px;">${escapeHtml(title)}</h1>
      </td>
    </tr>
    <tr>
      <td style="padding:24px;">${body}</td>
    </tr>
    ${companyFooterHtml(footerExtraHtml)}
  </table>
</body>
</html>`;
}

export async function POST(request: Request) {
  try {
    const { name, email, phone, referral, referralOther, message, captchaToken } =
      await request.json();

    if (!name || !email || !phone || !message || !captchaToken) {
      return NextResponse.json(
        { success: false, error: "Missing required fields or captcha" },
        { status: 400 },
      );
    }

    const source = referral === "Other" ? `Other: ${referralOther}` : referral;

    const verifyResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
      { method: "POST" },
    );

    const verifyData = await verifyResponse.json();

    if (!verifyData.success) {
      console.error("reCAPTCHA validation failed:", verifyData["error-codes"]);
      return NextResponse.json(
        { success: false, error: "Captcha verification failed" },
        { status: 400 },
      );
    }

    await writeClient.create({
      _type: "contactMessage",
      name,
      email,
      phone,
      referral: source,
      message,
      submittedAt: new Date().toISOString(),
    });

    const toEmail = process.env.ENQUIRY_TO_EMAIL || CONTACT_EMAIL;
    const notifyEmail = process.env.ENQUIRY_NOTIFY_EMAIL || TEST_NOTIFY_EMAIL;
    const fromEmail =
      process.env.ENQUIRY_FROM_EMAIL || `${SITE_NAME} <${CONTACT_EMAIL}>`;

    const adminSubject = `New Lead: ${name}`;

    const adminText = [
      "New Website Enquiry",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Source: ${source || "Not specified"}`,
      "",
      message,
      "",
      `Submitted on: ${new Date().toLocaleString("en-GB", { timeZone: "UTC" })} (UTC)`,
      "",
      companyFooterText(),
    ].join("\n");

    const adminHtml = emailShell(
      "New Website Enquiry",
      `<p style="margin:0 0 16px;font-size:14px;color:#666;">A new contact form was submitted. Here are the details:</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
        <tr>
          <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;width:150px;color:#6b7280;"><strong>Name:</strong></td>
          <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;color:#6b7280;"><strong>Email:</strong></td>
          <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;">
            <a href="mailto:${escapeHtml(email)}" style="color:#2d459c;text-decoration:none;">${escapeHtml(email)}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;color:#6b7280;"><strong>Phone:</strong></td>
          <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;">
            <a href="tel:${escapeHtml(phone)}" style="color:#2d459c;text-decoration:none;">${escapeHtml(phone)}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;color:#6b7280;"><strong>Source:</strong></td>
          <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;">${escapeHtml(source || "Not specified")}</td>
        </tr>
      </table>
      <div style="background-color:#f9f9f9;padding:15px;border-left:4px solid #2d459c;margin-bottom:12px;">
        <strong style="display:block;margin-bottom:5px;">Message:</strong>
        <p style="margin:0;white-space:pre-wrap;line-height:1.5;">${escapeHtml(message)}</p>
      </div>
      <p style="font-size:12px;color:#999;margin:0;">
        Submitted on: ${escapeHtml(new Date().toLocaleString("en-GB", { timeZone: "UTC" }))} (UTC)
      </p>`,
    );

    const admin = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      bcc: notifyEmail,
      replyTo: email,
      subject: adminSubject,
      text: adminText,
      html: adminHtml,
    });

    if (admin.error) {
      throw new Error(admin.error.message || "Unable to notify the 1st Call UK team.");
    }

    const immigrationExtraHtml = `
      <div style="margin-top:16px;padding-top:16px;border-top:1px solid #e5e7eb;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px;">
          <tr>
            <td align="left" style="width:50%;">
              <img src="https://www.1stcalluk.com/1st-calluk-logo02.jpg" alt="1st Call UK Logo" height="45" style="display:block;border-radius:8px;" />
            </td>
            <td align="right" style="width:50%;">
              <img src="https://www.1stcalluk.com/IAA-logo.jpg" alt="IAA Logo" height="45" style="display:block;border-radius:8px;" />
            </td>
          </tr>
        </table>
        <p style="margin:0 0 8px;font-size:12px;color:#666;">
          <strong>Principal Advisor:</strong> James Ramowski<br />
          <strong>Immigration desk:</strong> ${escapeHtml(IMMIGRATION_PHONE)}
        </p>
        <p style="margin:0;font-size:10px;color:#999;text-transform:uppercase;letter-spacing:0.5px;">
          1st Call Immigration Services is authorised and regulated by the Immigration Advice Authority<br />
          Ref No: F200800049
        </p>
      </div>`;

    const confirmHtml = emailShell(
      "We received your message",
      `<p style="margin:0 0 16px;font-size:16px;">Hi ${escapeHtml(name)},</p>
      <p style="margin:0 0 16px;line-height:1.6;">Thank you for contacting <strong>${escapeHtml(SITE_NAME)}</strong>. We have successfully received your enquiry. Our senior immigration advisor, James, or a member of our team will review your message and reply within <strong>two working days</strong>.</p>
      <p style="margin:0 0 8px;font-size:13px;color:#6b7280;">Your message</p>
      <p style="margin:0;white-space:pre-wrap;line-height:1.6;background:#f8fafc;border-left:4px solid #2d459c;padding:12px 16px;">${escapeHtml(message)}</p>`,
      immigrationExtraHtml,
    );

    const confirmation = await resend.emails.send({
      from: fromEmail,
      to: email,
      replyTo: CONTACT_EMAIL,
      subject: "Confirmation: We received your message",
      text: [
        `Hi ${name},`,
        "",
        `Thank you for contacting ${SITE_NAME}. We have successfully received your enquiry. Our senior immigration advisor, James, or a member of our team will review your message and reply within two working days.`,
        "",
        message,
        "",
        companyFooterText([
          "Principal Advisor: James Ramowski",
          `Immigration desk: ${IMMIGRATION_PHONE}`,
          "1st Call Immigration Services is authorised and regulated by the Immigration Advice Authority",
          "Ref No: F200800049",
        ]),
      ].join("\n"),
      html: confirmHtml,
    });

    if (confirmation.error) {
      throw new Error(confirmation.error.message || "Unable to send your confirmation email.");
    }

    await forwardPortalEnquiry({
      service: "immigration",
      sourceSite: "1stcalluk.com",
      sourceKind: "contact",
      sourceChannel: source || null,
      name,
      email,
      phone,
      message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Contact form error:", error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
