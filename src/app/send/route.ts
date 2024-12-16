import { NextResponse } from "next/server";
import { Resend } from "resend";

// Resend API key ko environment variable se lete hain
const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.FROM_EMAIL;

if (!resendApiKey || !fromEmail) {
  throw new Error("Environment variables RESEND_API_KEY and FROM_EMAIL must be set.");
}

// Resend instance create karte hain
const resend = new Resend(resendApiKey);

// Request body ka type define karte hain
interface EmailRequest {
  email: string;
  subject: string;
  message: string;
}

// POST function ko define karte hain
export async function POST(req: Request): Promise<NextResponse> {
  try {
    // Request body ko parse karte hain
    const { email, subject, message }: EmailRequest = await req.json();

    console.log("Email:", email, "Subject:", subject, "Message:", message);

    // Email bhejne ki koshish karte hain
    const data = await resend.emails.send({
      from: fromEmail,
      to: [''],
      subject: "Hello World",
      html: `
        <h1>${subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>New message submitted:</p>
        <p>${message}</p>
      `,
    });

    // Success response return karte hain
    return NextResponse.json({ success: true, data });
  } catch (error) {
    // Error response return karte hain
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: (error as Error).message });
  }
}