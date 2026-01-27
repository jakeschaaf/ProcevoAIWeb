import type { ContactFormData } from "./contact-schema";

export async function sendTelegramNotification(
  data: ContactFormData,
): Promise<void> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.warn(
      "Telegram credentials not configured, skipping notification",
    );
    return;
  }

  const text = [
    "*New Contact Form Submission*",
    "",
    `Email: ${data.email}`,
    data.name ? `Name: ${data.name}` : null,
    data.company ? `Company: ${data.company}` : null,
    "",
    "Message:",
    data.message,
  ]
    .filter(Boolean)
    .join("\n");

  const response = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
      }),
    },
  );

  if (!response.ok) {
    console.error("Telegram notification failed:", await response.text());
  }
}
