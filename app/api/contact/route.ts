import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { error: "Invalid request payload. Please send a valid JSON body." },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = body;

    // 1. Basic validation
    if (!name || !name.trim()) {
      return NextResponse.json({ error: "Recruiter name is required." }, { status: 400 });
    }
    if (!email || !email.trim()) {
      return NextResponse.json({ error: "Recruiter email is required." }, { status: 400 });
    }
    if (!subject || !subject.trim()) {
      return NextResponse.json({ error: "Inquiry type/subject is required." }, { status: 400 });
    }
    if (!message || !message.trim()) {
      return NextResponse.json({ error: "Message content is required." }, { status: 400 });
    }

    // 2. Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Invalid email format." }, { status: 400 });
    }

    // 3. Configure credentials
    const mailTo = process.env.CONTACT_EMAIL_TO || "sivad5712@gmail.com";
    const mailCc = process.env.CONTACT_EMAIL_CC || "";
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    // If SMTP credentials aren't provided or are placeholders, return an error so the user knows they need to input them.
    const isPlaceholder = 
      !gmailUser || 
      !gmailAppPassword || 
      gmailUser.includes("your_gmail") || 
      gmailAppPassword.includes("your_google_app_password") || 
      gmailAppPassword.includes("your_gmail_app_password") ||
      gmailAppPassword.includes("google_app_password");

    if (isPlaceholder) {
      return NextResponse.json(
        {
          error: "Gmail SMTP credentials are not configured on the server yet. Please add your real GMAIL_USER and GMAIL_APP_PASSWORD to your .env.local file to enable email delivery.",
          code: "SMTP_MISSING"
        },
        { status: 500 }
      );
    }



    // 4. Create Nodemailer SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    const mailOptions: any = {
      from: `"${name}" <${gmailUser}>`,
      replyTo: email,
      to: mailTo,
      subject: `[Siva Resume Assistant] ${subject}`,
      text: `
New recruiter message from Siva AI Resume Assistant

Recruiter Name:
${name}

Recruiter Email:
${email}

Inquiry Type:
${subject}

Message:
${message}

Sent from:
Siva AI Resume Assistant - localhost / portfolio contact form
      `,
    };

    if (mailCc) {
      mailOptions.cc = mailCc;
    }

    // 5. Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Thank you. Your message has been sent to Siva.",
    });
  } catch (error: any) {
    console.error("Nodemailer error in API route:", error);
    return NextResponse.json(
      { error: "Sorry, the message could not be sent. Please try again or email Siva directly at Sivad5712@gmail.com." },
      { status: 500 }
    );
  }
}
