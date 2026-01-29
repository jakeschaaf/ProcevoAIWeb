import { Resend } from "resend";
import type { ContactFormData } from "./contact-schema";

function getResendClient() {
  return new Resend(process.env.RESEND_API_KEY);
}

export async function sendContactEmail(
  data: ContactFormData,
): Promise<void> {
  const resend = getResendClient();
  await resend.emails.send({
    from: "Contact Form <contact@procevo.ai>",
    to: ["jake@procevo.ai"],
    replyTo: data.email,
    subject: `New Contact: ${data.name || "Website Visitor"}${data.company ? ` from ${data.company}` : ""}`,
    text: formatEmailText(data),
  });
}

function formatEmailText(data: ContactFormData): string {
  return [
    `Email: ${data.email}`,
    data.name ? `Name: ${data.name}` : null,
    data.company ? `Company: ${data.company}` : null,
    data.phone ? `Phone: ${data.phone}` : null,
    "",
    "Message:",
    data.message,
  ]
    .filter(Boolean)
    .join("\n");
}
