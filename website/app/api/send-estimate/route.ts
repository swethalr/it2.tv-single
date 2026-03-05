import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// .env.local required:
// SMTP_HOST=smtp.gmail.com
// SMTP_PORT=587
// SMTP_USER=your@gmail.com
// SMTP_PASS=your-app-password
// CEO_EMAIL=ceo@yourcompany.com

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      category, country, state, city, localArea,
      leadsDisplay, seoLabel, totalPrice, form,
    } = body;

    const transporter = nodemailer.createTransport({
      host:   process.env.SMTP_HOST,
      port:   Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const locationStr = [localArea, city, state, country].filter(Boolean).join(", ");
    const estimatedRoi = `$${(totalPrice * 8).toLocaleString()}+/mo`;

    const htmlBody = `
     
      <html>
      <head><meta charset="utf-8" /></head>
      <body style="font-family:Inter,sans-serif;background:#f0faf0;padding:32px;margin:0">
        <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,60,0,0.1)">
          
          <div style="background:linear-gradient(135deg,#1b5e20,#2e7d32);padding:32px;text-align:center">
            <h1 style="color:#fff;margin:0;font-size:24px;font-weight:800">New SEO Strategy Request</h1>
            <p style="color:#a5d6a7;margin:8px 0 0;font-size:14px">Submitted via SEO Estimator</p>
          </div>

          <div style="padding:32px">
            <div style="background:#f0faf0;border-radius:12px;padding:20px;margin-bottom:24px">
              <h2 style="color:#1b5e20;margin:0 0 16px;font-size:16px">💼 Business Details</h2>
              <table style="width:100%;border-collapse:collapse">
                ${[
                  ["Business Name", form.businessName],
                  ["Website",       form.website || "Not provided"],
                  ["Email",         form.email],
                ].map(([k, v]) => `
                  <tr>
                    <td style="padding:6px 0;color:#4a7c59;font-size:13px;font-weight:600;width:40%">${k}</td>
                    <td style="padding:6px 0;color:#1b5e20;font-size:13px;font-weight:700">${v}</td>
                  </tr>
                `).join("")}
              </table>
            </div>

            <div style="background:#f0faf0;border-radius:12px;padding:20px;margin-bottom:24px">
              <h2 style="color:#1b5e20;margin:0 0 16px;font-size:16px">📍 SEO Target</h2>
              <table style="width:100%;border-collapse:collapse">
                ${[
                  ["Category",    category],
                  ["Location",    locationStr],
                  ["Lead Target", leadsDisplay],
                  ["SEO Package", seoLabel],
                ].map(([k, v]) => `
                  <tr>
                    <td style="padding:6px 0;color:#4a7c59;font-size:13px;font-weight:600;width:40%">${k}</td>
                    <td style="padding:6px 0;color:#1b5e20;font-size:13px;font-weight:700">${v}</td>
                  </tr>
                `).join("")}
              </table>
            </div>

            <div style="background:linear-gradient(135deg,#1b5e20,#2e7d32);border-radius:12px;padding:24px;text-align:center">
              <p style="color:#a5d6a7;margin:0 0 4px;font-size:12px;text-transform:uppercase;letter-spacing:1px">Monthly Investment</p>
              <p style="color:#fff;font-size:48px;font-weight:900;margin:0;letter-spacing:-2px">
                $${Number(totalPrice).toLocaleString()}<span style="font-size:16px;font-weight:400;color:#a5d6a7">/mo</span>
              </p>
              <p style="color:#a5d6a7;margin:8px 0 0;font-size:13px">Estimated ROI: ${estimatedRoi}</p>
            </div>
          </div>

          <div style="background:#f0faf0;padding:20px;text-align:center;border-top:1px solid #e0f2e0">
            <p style="color:#7daa7d;font-size:12px;margin:0">This estimate was generated via your SEO Estimator tool</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Email to CEO
    await transporter.sendMail({
      from:    `"SEO Estimator" <${process.env.SMTP_USER}>`,
      to:      process.env.CEO_EMAIL,
      subject: `🚀 New SEO Estimate: ${form.businessName} — $${Number(totalPrice).toLocaleString()}/mo`,
      html:    htmlBody,
    });

    // Confirmation email to the user
    await transporter.sendMail({
      from:    `"Rank One SEO" <${process.env.SMTP_USER}>`,
      to:      form.email,
      subject: "Your SEO Strategy Estimate is Ready!",
      html:    htmlBody.replace(
        "New SEO Strategy Request",
        `Hi ${form.businessName}, your strategy is ready!`
      ),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}