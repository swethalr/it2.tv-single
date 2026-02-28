'use server';

import nodemailer from 'nodemailer';

export async function contactUsFormSubmit(values: any) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.CONTACT_MAIL_ADDRESS,
        pass: process.env.CONTACT_MAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Website Lead" <${process.env.CONTACT_MAIL_ADDRESS}>`,
      to: process.env.CONTACT_MAIL_ADDRESS,
      replyTo: values.email,
      subject: `it2.tv - ${values.subject}`,
      html: `
        <div style="font-family: Arial; padding: 20px; border: 1px solid #3cb878;">
          <h2 style="color: #3cb878;">New Lead Submission</h2>
          <p><strong>Website:</strong> ${values.web}</p>
          <p><strong>Email:</strong> ${values.email}</p>
          <p><strong>Phone:</strong> ${values.phone}</p>
          <p><strong>Subject:</strong> ${values.subject}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { isSuccess: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error(error);
    return { isSuccess: false, message: 'Failed to send message.' };
  }
}
