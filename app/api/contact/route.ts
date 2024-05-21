import { NextResponse } from "next/server";
import { Resend } from "resend";
import { Email } from "@/emails/Email";

const resend = new Resend(process.env.RESEND_API_KEY);
let formSubmitted = false;

export async function POST(request: Request) {
  const { firstName, lastName, email, phone, message } = await request.json();

  if (formSubmitted) {
    return NextResponse.json(
      { error: "Form already submitted" },
      { status: 400 }
    );
  }

  try {    
    
    await resend.emails.send({
      from: "message@yanait.com",
      to: "yanis991@hotmail.com",
      subject: "Message Recieved",
      react: Email({ firstName, lastName, email, phone, message }),
    });

    formSubmitted = true;
    return NextResponse.json({ data: "email sent" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
