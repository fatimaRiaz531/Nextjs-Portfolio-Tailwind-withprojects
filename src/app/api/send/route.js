import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);

  // Fetch the API key and email addresses asynchronously
  const apiKey = await fetchApiKey(); // Assume this function fetches the API key
  const fromEmail = process.env.FROM_EMAIL;
  const resend = new Resend(apiKey);

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: process.env.RECEIVER_EMAIL,
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

// Example function to fetch the API key
async function fetchApiKey() {
  // Logic to fetch the API key, e.g., from a secure store or environment variable
  return process.env.RESEND_API_KEY; // Replace with actual fetching logic if needed
}
