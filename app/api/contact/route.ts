import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Lazy initialization of the Resend client.
 */
const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not defined');
  }
  return new Resend(apiKey);
};

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * Handles contact form submissions via Resend.
 */
export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = (await req.json()) as ContactFormData;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tüm alanlar zorunludur.' },
        { status: 400 },
      );
    }

    const resend = getResendClient();
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'gunesmert67@gmail.com',
      subject: `New Message from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 40px auto; background: #ffffff; color: #1a1a1a; border: 1px solid #e5e7eb; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
          <div style="padding: 32px 40px; border-bottom: 1px solid #f3f4f6;">
            <h1 style="font-size: 24px; font-weight: 800; tracking-tighter: -0.05em; margin: 0; color: #0F4C81; text-transform: uppercase;">Mert Güneş</h1>
            <p style="font-size: 12px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 4px;">Incoming Portfolio Inquiry</p>
          </div>
          <div style="padding: 40px;">
            <div style="margin-bottom: 32px;">
              <p style="font-size: 10px; font-weight: 800; color: #0F4C81; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 12px;">From</p>
              <p style="font-size: 16px; font-weight: 600; margin: 0;">${name}</p>
              <p style="font-size: 14px; color: #4b5563; margin: 4px 0 0;"><a href="mailto:${email}" style="color: #0F4C81; text-decoration: none;">${email}</a></p>
            </div>
            
            <div style="margin-bottom: 32px; padding: 24px; background: #f9fafb; border-radius: 6px; border-left: 4px solid #0F4C81;">
              <p style="font-size: 10px; font-weight: 800; color: #0F4C81; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 16px;">Message Body</p>
              <p style="font-size: 15px; line-height: 1.6; color: #1f2937; white-space: pre-wrap; margin: 0;">${message}</p>
            </div>
          </div>
          <div style="padding: 24px 40px; background: #f9fafb; border-top: 1px solid #f3f4f6; text-align: center; border-radius: 0 0 8px 8px;">
            <p style="font-size: 11px; font-weight: 600; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.1em; margin: 0;">
              Sent via <a href="https://mertgunes.com" style="color: #9ca3af; text-decoration: underline;">mertgunes.com</a>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend API Error:', error);
    return NextResponse.json({ error: 'Mail gönderilemedi.' }, { status: 500 });
  }
}
