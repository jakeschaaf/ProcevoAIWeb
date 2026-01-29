import { z } from "zod";

export const contactSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().optional(),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z
    .string()
    .min(1, "Please enter a message")
    .max(2000, "Message too long"),
  website: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
