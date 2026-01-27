import { contactSchema } from "@/lib/contact-schema";
import { sendContactEmail } from "@/lib/email";
import { sendTelegramNotification } from "@/lib/telegram";
import { ZodError } from "zod";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.website) {
      return Response.json({ success: true });
    }

    const validated = contactSchema.parse(body);

    await Promise.all([
      sendContactEmail(validated),
      sendTelegramNotification(validated),
    ]);

    return Response.json({ success: true });
  } catch (error) {
    if (error instanceof ZodError) {
      return Response.json(
        { error: "Validation failed", details: error.issues },
        { status: 400 },
      );
    }
    console.error("Contact form error:", error);
    return Response.json(
      { error: "An error occurred. Please try again." },
      { status: 500 },
    );
  }
}
