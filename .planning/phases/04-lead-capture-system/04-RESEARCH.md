# Phase 4: Lead Capture System - Research

**Researched:** 2026-01-26
**Domain:** Contact form, email notifications, Telegram notifications, serverless functions
**Confidence:** HIGH

## Summary

This phase implements a frictionless contact form with dual notification channels (email via Resend, instant mobile notification via Telegram). The critical architectural challenge is that the current project uses `output: 'export'` for static site generation, which is incompatible with server-side API routes needed for secure email/Telegram notifications.

**The recommended solution is to remove `output: 'export'` from next.config.ts.** This allows Next.js on Vercel to automatically optimize static pages while enabling Route Handlers for the contact form API. This is the officially recommended approach from both Next.js and Vercel documentation - "Next.js will automatically optimize for static on Vercel, plus you can use API routes."

**Primary recommendation:** Remove `output: 'export'`, use Next.js Route Handlers (`app/api/contact/route.ts`) to handle form submissions server-side, sending notifications via Resend and Telegram Bot API.

## Standard Stack

The established libraries/tools for this domain:

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| resend | ^4.x | Email delivery API | Modern, developer-focused email API with excellent DX, built by Vercel alumni |
| react-hook-form | ^7.54.x | Form state management | Best React form library - minimal re-renders, great TypeScript support |
| zod | ^3.24.x | Schema validation | Type-safe validation that works client and server-side, integrates with react-hook-form |
| @hookform/resolvers | ^3.9.x | Form validation bridge | Connects zod schemas to react-hook-form |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| (native fetch) | Built-in | Telegram API calls | No SDK needed - simple HTTP POST |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Resend | SendGrid, Postmark | Resend has simpler API, React Email integration, better DX; SendGrid more enterprise features |
| React Hook Form | Formik | RHF is lighter, fewer re-renders, better performance |
| Telegram | Slack, Discord | Telegram is user's explicit preference; instant mobile notifications |

**Installation:**
```bash
npm install resend react-hook-form zod @hookform/resolvers
```

## Architecture Patterns

### Critical: Remove Static Export

The project currently has `output: 'export'` which prevents API routes:

```typescript
// next.config.ts - CURRENT (problematic)
const nextConfig: NextConfig = {
  output: "export",  // REMOVE THIS
  images: {
    unoptimized: true,  // KEEP if not using Vercel Image Optimization
  },
};
```

```typescript
// next.config.ts - RECOMMENDED
const nextConfig: NextConfig = {
  images: {
    unoptimized: true,  // Can remove this if using Vercel's Image Optimization
  },
};
```

**Why this works:** When deployed to Vercel without `output: 'export'`, Next.js automatically:
- Statically generates pages that don't use dynamic server functions
- Creates serverless functions for Route Handlers
- Optimizes everything appropriately

### Recommended Project Structure
```
app/
├── api/
│   └── contact/
│       └── route.ts         # POST handler for form submissions
├── (marketing)/
│   └── contact/
│       └── page.tsx         # Contact page with form
components/
├── contact-form.tsx         # Client Component with form logic
└── ui/
    └── input.tsx            # Reusable input component (optional)
lib/
├── email.ts                 # Resend email sending utility
└── telegram.ts              # Telegram notification utility
```

### Pattern 1: Route Handler for Form Processing
**What:** Server-side API route that receives form data, validates, sends notifications
**When to use:** Always for contact forms - keeps API keys secure server-side

```typescript
// app/api/contact/route.ts
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(1).max(2000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = contactSchema.parse(body);

    // Send email via Resend
    await resend.emails.send({
      from: 'Contact Form <contact@procevo.ai>',
      to: ['jake@procevo.ai'],
      replyTo: validated.email,
      subject: `New Contact: ${validated.name || 'Anonymous'}`,
      text: formatEmailText(validated),
    });

    // Send Telegram notification
    await sendTelegramNotification(validated);

    return Response.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json({ error: 'Invalid data', details: error.errors }, { status: 400 });
    }
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}
```

### Pattern 2: Client-Side Form with React Hook Form + Zod
**What:** Type-safe form with immediate validation feedback
**When to use:** All forms requiring validation

```typescript
// components/contact-form.tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  name: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(1, 'Please enter a message').max(2000),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',  // Validate on blur for good UX
  });

  const onSubmit = async (data: FormData) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    // Handle response...
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form fields... */}
    </form>
  );
}
```

### Pattern 3: Telegram Bot Notification
**What:** HTTP POST to Telegram Bot API for instant mobile notifications
**When to use:** When instant notification on mobile is required

```typescript
// lib/telegram.ts
type ContactData = {
  email: string;
  name?: string;
  company?: string;
  message: string;
};

export async function sendTelegramNotification(data: ContactData): Promise<void> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.warn('Telegram credentials not configured');
    return;
  }

  const text = [
    '🔔 *New Contact Form Submission*',
    '',
    `📧 Email: ${data.email}`,
    data.name ? `👤 Name: ${data.name}` : null,
    data.company ? `🏢 Company: ${data.company}` : null,
    '',
    `💬 Message:`,
    data.message,
  ].filter(Boolean).join('\n');

  await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: 'Markdown',
    }),
  });
}
```

### Anti-Patterns to Avoid
- **Client-side API keys:** NEVER put Resend or Telegram tokens in client code
- **Form action to third-party:** Using services like Formspree works but loses control over UX and notification customization
- **Server Actions with static export:** Will fail at build time
- **Synchronous notifications:** Always make email and Telegram calls in parallel when possible

## Don't Hand-Roll

Problems that look simple but have existing solutions:

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Form validation | Custom regex/conditionals | Zod schemas | Handles edge cases, type-safe, reusable client/server |
| Form state | useState for each field | react-hook-form | Handles touched/dirty/error states, minimizes re-renders |
| Email delivery | Direct SMTP | Resend API | Deliverability, tracking, SPF/DKIM handling |
| Spam protection | Complex CAPTCHA | Honeypot field | Zero friction for users, catches most bots |

**Key insight:** Email deliverability is notoriously complex (SPF, DKIM, DMARC, reputation). Using Resend eliminates this entire problem domain.

## Common Pitfalls

### Pitfall 1: Static Export with API Routes
**What goes wrong:** Build fails with "Server Actions are not supported with static export"
**Why it happens:** `output: 'export'` creates pure static HTML, incompatible with server-side code
**How to avoid:** Remove `output: 'export'` from next.config.ts
**Warning signs:** Build errors mentioning "static export" and "API routes"

### Pitfall 2: Exposing API Keys Client-Side
**What goes wrong:** API keys in client bundle, visible in browser DevTools
**Why it happens:** Using keys directly in components instead of Route Handlers
**How to avoid:** All API calls with secrets must go through Route Handlers (server-side)
**Warning signs:** Environment variables not prefixed with NEXT_PUBLIC_ appearing in browser

### Pitfall 3: Missing Domain Verification (Resend)
**What goes wrong:** Emails sent from `onboarding@resend.dev` instead of your domain, or emails bounced
**Why it happens:** Domain not verified in Resend dashboard
**How to avoid:** Verify procevo.ai domain in Resend before going live
**Warning signs:** Emails show wrong sender domain or don't arrive

### Pitfall 4: Telegram Chat ID Format
**What goes wrong:** Messages not delivered to Telegram
**Why it happens:** Using wrong chat_id format (group IDs are negative numbers)
**How to avoid:** Get chat_id by messaging your bot, then calling getUpdates API
**Warning signs:** 400 errors from Telegram API

### Pitfall 5: Form Validation Mode
**What goes wrong:** Poor UX - errors shown too early or too late
**Why it happens:** Using wrong validation mode in react-hook-form
**How to avoid:** Use `mode: 'onBlur'` for good balance of feedback timing
**Warning signs:** Errors shown before user finishes typing, or only after submit

### Pitfall 6: Missing Error Handling for Notifications
**What goes wrong:** Form shows success but notifications fail silently
**Why it happens:** Not catching/handling email or Telegram failures
**How to avoid:** Log failures, consider storing submissions in database as backup
**Warning signs:** User submitted but no notification received

## Code Examples

### Environment Variables Setup
```bash
# .env.local (do NOT commit this file)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
TELEGRAM_BOT_TOKEN=123456789:ABCdefGhIJKlmNOPqrsTUVwxyz
TELEGRAM_CHAT_ID=123456789
```

### Resend Email with Plain Text (Recommended for Contact Forms)
```typescript
// Source: https://resend.com/docs/send-with-nextjs
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'Contact Form <contact@procevo.ai>',
  to: ['jake@procevo.ai'],
  replyTo: userEmail,
  subject: 'New Contact Form Submission',
  text: `
Name: ${name}
Email: ${email}
Company: ${company}
Message: ${message}
  `.trim(),
});
```

### Honeypot Spam Protection
```typescript
// In form schema - add hidden field
const formSchema = z.object({
  email: z.string().email(),
  message: z.string().min(1),
  // Honeypot - should always be empty
  website: z.string().max(0).optional(),  // Bots will fill this
});

// In JSX - hidden from users
<input
  type="text"
  {...register('website')}
  className="absolute -left-[9999px]"
  tabIndex={-1}
  autoComplete="off"
  aria-hidden="true"
/>

// In API route - reject if filled
if (body.website) {
  // Silently "succeed" to not tip off bots
  return Response.json({ success: true });
}
```

### Getting Telegram Chat ID
```bash
# Step 1: Message your bot on Telegram (search for your bot and send any message)

# Step 2: Get your chat_id
curl "https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates"

# Response includes chat.id in the message object:
# "chat": { "id": 123456789, ... }
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `next export` command | `output: 'export'` config | Next.js 14 | Same functionality, config-based |
| Formspree/Netlify Forms | Route Handlers + Resend | 2023+ | Full control over UX and notifications |
| reCAPTCHA v2 | Honeypot + rate limiting | 2024+ | Zero user friction while still effective |
| nodemailer + SMTP | Resend/SendGrid APIs | 2022+ | Better deliverability, simpler setup |

**Deprecated/outdated:**
- `next export` CLI command: Removed in Next.js 14, use `output: 'export'` config instead
- SMTP from serverless: Vercel blocks port 25, use HTTP APIs instead

## Open Questions

Things that couldn't be fully resolved:

1. **Domain verification timing**
   - What we know: Resend requires domain verification to send from custom domain
   - What's unclear: Exact time for DNS propagation
   - Recommendation: Set up domain verification early, use `onboarding@resend.dev` for testing

2. **Telegram rate limits for single user notifications**
   - What we know: 1 message/second limit per chat, 30 messages/second global
   - What's unclear: Whether single-chat limits apply to notifications (not conversations)
   - Recommendation: For contact form volumes, this is a non-issue (unlikely to exceed)

## Sources

### Primary (HIGH confidence)
- [Next.js Static Exports Documentation](https://nextjs.org/docs/app/guides/static-exports) - Confirmed API routes not supported with static export
- [Vercel Functions Documentation](https://vercel.com/docs/functions) - Route Handler deployment as serverless functions
- [Resend Node.js Documentation](https://resend.com/docs/send-with-nextjs) - Official SDK usage
- [Telegram Bot API](https://core.telegram.org/bots/api) - sendMessage parameters and authentication

### Secondary (MEDIUM confidence)
- [GitHub Discussion: API with next export](https://github.com/vercel/vercel/discussions/6551) - Confirmed recommendation to remove `output: 'export'`
- [GitHub Discussion: Server Actions in Static Exports](https://github.com/vercel/next.js/discussions/67503) - Confirmed limitation
- [React Hook Form + Zod Guide](https://www.freecodecamp.org/news/react-form-validation-zod-react-hook-form/) - Integration patterns

### Tertiary (LOW confidence)
- WebSearch results for honeypot spam protection best practices (patterns verified across multiple sources)
- WebSearch results for Telegram rate limits (undocumented officially, derived from community experience)

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - Well-established libraries, official documentation verified
- Architecture: HIGH - Official Next.js/Vercel documentation confirms approach
- Pitfalls: HIGH - Derived from official documentation limitations
- Spam protection: MEDIUM - Community best practices, not officially documented

**Research date:** 2026-01-26
**Valid until:** 2026-03-26 (90 days - stable technologies, unlikely to change significantly)
