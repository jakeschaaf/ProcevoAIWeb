# Stack Research: B2B Marketing Website (Vercel-Hosted)

**Research Date:** 2026-01-26
**Target:** Marketing site for Procevo AI consulting firm
**Context:** Greenfield project, B2B mid-market audience ($750K-$100M revenue), results-focused messaging

---

## Recommended Stack

### Core Framework & Deployment

**Next.js 16.1.1** (App Router with React Server Components)
- **Version:** Latest stable as of January 2026
- **Rationale:**
  - Native Vercel integration with zero-config deployment
  - React Server Components reduce JS bundle by 15-20% for marketing sites
  - Static export mode (`output: 'export'`) for pure static hosting
  - Server Actions for type-safe form handling without API routes
  - Superior SEO: fully-formed HTML server-rendered before browser receives response
  - File-system routing keeps structure simple and predictable
- **Deployment Config:**
  ```typescript
  // next.config.ts
  const nextConfig: NextConfig = {
    output: 'export' // Static site generation
  }
  ```
- **Sources:** [Next.js on Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs), [React & Next.js Best Practices 2025](https://strapi.io/blog/react-and-nextjs-in-2025-modern-best-practices)

**React 19** (Latest)
- **Rationale:** Required peer dependency for Next.js 16, includes Server Components and Actions
- **Source:** [Next.js Documentation](https://github.com/vercel/next.js)

**TypeScript 5.x**
- **Rationale:**
  - Mandatory for maintainability in GSD workflow
  - End-to-end type safety from form validation to server actions
  - Catch errors at compile time, not in production
- **Source:** Project CLAUDE.md requirements

### Styling & UI

**Tailwind CSS v4.0**
- **Rationale:**
  - New high-performance engine: 5x faster full builds, 100x faster incremental
  - 75M+ monthly downloads, industry standard for B2B sites
  - Extensive B2B-focused template ecosystem (Salient, Oatmeal)
  - CSS-first configuration (no more JavaScript config)
  - Built on modern CSS: cascade layers, @property, color-mix()
- **Sources:** [Tailwind CSS v4.0](https://tailwindcss.com/blog/tailwindcss-v4), [Tailwind CSS Documentation](https://tailwindcss.com/)

**shadcn/ui** (Latest, no version - copy-paste components)
- **Rationale:**
  - Copy-paste approach = full code ownership, no hidden npm dependencies
  - Built on Radix UI (accessibility) + Tailwind CSS (styling)
  - Tree-shaking actually works (delete unused code)
  - AI-friendly: consistent patterns, readable TypeScript in your codebase
  - Extensive B2B templates available for Next.js
  - Perfect for contact forms, buttons, cards needed in marketing sites
- **Anti-Pattern:** Don't use as npm package - use CLI to copy components into `components/ui/`
- **Sources:** [shadcn/ui Installation](https://ui.shadcn.com/docs/installation/next), [shadcn/ui Overview](https://www.shadcn.io/ui)

**Framer Motion (Motion) 11.x**
- **Rationale:**
  - Production-grade animations for hero sections, page transitions
  - Fast, optimized for React Server Components (use "use client" directive)
  - Built-in performance optimizations (layout animations, exit handling)
  - Enhances professional feel without "flashy" overload
- **Performance Notes:**
  - Use `layoutId` for shared element transitions
  - Leverage `whileTap`/`whileHover` props over custom handlers
  - Disable initial animations in SSR (`initial={false}`)
- **Sources:** [Motion Official Site](https://motion.dev/), [Framer Motion Performance Tips](https://tillitsdone.com/blogs/framer-motion-performance-tips/)

### Forms & Validation

**React Hook Form 7.x**
- **Rationale:**
  - De facto standard for React forms in 2026
  - Minimal re-renders, excellent performance
  - Native integration with Next.js Server Actions
  - Works seamlessly with Zod for validation
- **Source:** [React Hook Form Advanced Usage](https://react-hook-form.com/advanced-usage)

**Zod 3.x**
- **Rationale:**
  - TypeScript-native schema validation
  - `z.infer<typeof schema>` auto-generates types
  - Client + server validation with same schema (DRY)
  - Better UX: validate on blur/change (`mode: "all"`)
  - Security: sanitize inputs, prevent XSS
- **Best Practices:**
  - Define error messages in schema, not components
  - Create reusable schemas (e.g., email validation)
  - Always validate server-side even with client validation
- **Sources:** [Zod with React Hook Form](https://www.contentful.com/blog/react-hook-form-validation-zod/), [Form Validation Guide](https://www.freecodecamp.org/news/react-form-validation-zod-react-hook-form/)

### Email & Notifications

**Resend Email API**
- **Rationale:**
  - Native Next.js Server Actions integration ("use server" directive)
  - Type-safe, no separate API routes needed
  - React-based email templates (use components for email content)
  - Clean, modern developer experience
  - Popular choice for Next.js contact forms in 2026
- **Implementation Pattern:**
  - Define async server action with "use server"
  - Validate form with Zod
  - Send via Resend SDK
  - Return status for toast notification
- **Sources:** [Resend Next.js Integration](https://resend.com/nextjs), [Next.js Send Email Tutorial 2026](https://mailtrap.io/blog/nextjs-send-email/), [Resend Contact Form Template](https://github.com/JPerez00/resend-email-template)

**Telegram Bot API** (Official Telegram Bot SDK)
- **Rationale:**
  - Speed of response is competitive advantage (per PROJECT.md)
  - Instant push notifications to mobile device
  - Simple webhook integration with Next.js API routes
  - Use `setWebhook` method for HTTPS POST to Next.js endpoint
- **Implementation:**
  - Create bot via BotFather, get token
  - Set webhook URL to Next.js API route
  - Send notification on form submission via Server Action
- **Sources:** [Telegram Bot API](https://core.telegram.org/bots/api), [Send Messages via Telegram in Next.js](https://dev.to/high5dev/how-to-send-messages-via-telegram-in-a-nextjs-application-1o93), [Telegram Bot Next.js Guide](https://www.launchfa.st/blog/telegram-nextjs-app-router)

**Sonner** (Toast Notifications)
- **Rationale:**
  - Lightweight, beautiful toast notifications
  - Commonly paired with Resend + Server Actions
  - Provides user feedback on form submission
- **Source:** Referenced in [Resend Email Template](https://github.com/JPerez00/resend-email-template)

### Analytics

**Vercel Analytics** (@vercel/analytics)
- **Rationale:**
  - Zero-config for Vercel deployments
  - Privacy-first: GDPR/CCPA compliant, no cookies needed
  - 44x smaller than Google Analytics (better Core Web Vitals)
  - Anonymous aggregated data, 24-hour retention
  - No third-party scripts = faster page loads
  - Optional: GDPR consent-aware component if explicit consent required
- **Anti-Pattern:** Avoid Google Analytics for B2B marketing sites (privacy concerns, performance hit)
- **Sources:** [Vercel Analytics GitHub](https://github.com/vercel/analytics), [GDPR-Compliant Vercel Analytics](https://www.buildwithmatija.com/blog/gdpr-compliant-vercel-analytics), [Privacy Policy](https://vercel.com/docs/analytics/privacy-policy)

### Development Tools

**Prettier** (Latest)
- **Rationale:** Enforced by CI (per CLAUDE.md G-1)
- **Source:** Project CLAUDE.md

**ESLint** (Next.js Config)
- **Rationale:** Enforced by CI (per CLAUDE.md G-2: `turbo typecheck lint`)
- **Source:** Project CLAUDE.md

**Turbo** (Monorepo Build System)
- **Rationale:** Already referenced in project CLAUDE.md for typecheck/lint
- **Note:** May not be needed for single-package marketing site, but keep if already in use
- **Source:** Project CLAUDE.md

---

## Alternatives Considered

### Content Management

**Sanity / Contentful / Strapi**
- **Why Not:** PROJECT.md explicitly states "no CMS" - content lives on social media, site is static destination only
- **Confidence:** HIGH (user requirement)

### Styling Frameworks

**CSS Modules / Styled-Components / Emotion**
- **Why Not:** Tailwind v4 is faster, more maintainable, and has better B2B ecosystem
- **When to Reconsider:** If team has strong CSS-in-JS preference or needs runtime theming
- **Confidence:** MEDIUM (team preference could override)

### Form Libraries

**Formik**
- **Why Not:** React Hook Form is lighter, faster, and has better TypeScript/Zod integration
- **Market Status:** Declining adoption in favor of React Hook Form
- **Confidence:** HIGH (React Hook Form is 2026 standard)

### Email Services

**SendGrid / Mailgun**
- **Why Not:** More complex setup, less native Next.js integration than Resend
- **When to Reconsider:** If already have enterprise contract or need advanced email marketing features
- **Confidence:** MEDIUM (Resend is simpler for contact forms, but enterprise teams may prefer established vendors)

### Animation Libraries

**GSAP / Anime.js / React Spring**
- **Why Not:** Framer Motion is React-native, more declarative, better DX for component-based animations
- **When to Reconsider:** If need timeline-based animations or advanced scroll-triggered effects
- **Confidence:** MEDIUM (Framer Motion fits 90% of marketing site needs)

### Analytics

**Google Analytics / Plausible / Fathom**
- **Why Not Google Analytics:** Privacy concerns, performance overhead, cookie compliance complexity
- **Why Not Plausible/Fathom:** Require subscription, Vercel Analytics is free and zero-config
- **When to Reconsider:** If need advanced funnel tracking or cross-domain analytics
- **Confidence:** HIGH for Vercel Analytics vs GA, MEDIUM vs privacy-focused alternatives

---

## Anti-Recommendations

### DO NOT Use

**Create React App (CRA)**
- **Why:** Officially deprecated, no longer maintained
- **Use Instead:** Next.js
- **Source:** [React 2026: Why SPAs are Becoming Legacy](https://dev.to/pritampatil/react-2026-why-the-all-client-spa-is-becoming-legacy-code-3d8e)

**Webpack Manual Configuration**
- **Why:** Next.js includes optimized Rust-based bundler
- **Effort:** Unnecessary complexity for marketing site

**Client-Side Only Data Fetching (useEffect + fetch)**
- **Why:** Poor SEO, slower initial render, bad Core Web Vitals
- **Use Instead:** React Server Components for static content
- **Source:** [RSC Performance Guide](https://www.developerway.com/posts/react-server-components-performance)

**CSS Frameworks with Heavy JS (Bootstrap, Material-UI)**
- **Why:** Bundle size bloat, unnecessary JavaScript for static marketing content
- **Use Instead:** Tailwind CSS + shadcn/ui

**Full-Page SPAs for Marketing Sites**
- **Why:** Google's 2026 algorithm penalizes high INP and slow load times
- **Impact:** Server-first architecture (Next.js SSG) ranks higher
- **Source:** [RSC Explained 2026](https://www.grapestechsolutions.com/blog/react-server-components-explained/)

**npm Packages for Simple Utilities**
- **Why:** Bloat, supply chain risk
- **Example:** Don't install `is-even` when `n % 2 === 0` works
- **Principle:** Write simple functions in `packages/shared` per project structure

---

## Confidence Levels

| Category | Choice | Confidence | Notes |
|----------|--------|------------|-------|
| **Core Framework** | Next.js 16.1.1 + React 19 | **HIGH** | Industry standard 2026, Vercel-native, user requirement |
| **Styling** | Tailwind CSS v4.0 | **HIGH** | Clear winner for performance + ecosystem |
| **UI Components** | shadcn/ui | **HIGH** | Code ownership, AI-friendly, no lock-in |
| **Forms** | React Hook Form + Zod | **HIGH** | 2026 standard, excellent DX |
| **Email** | Resend | **MEDIUM-HIGH** | Best for Next.js Server Actions, but alternatives exist |
| **Notifications** | Telegram Bot API | **HIGH** | User requirement (speed advantage) |
| **Animations** | Framer Motion | **MEDIUM** | Good default, but project says "not flashy" - may need minimal use |
| **Analytics** | Vercel Analytics | **HIGH** | Zero-config, privacy-first, performance-focused |
| **Static Export** | `output: 'export'` | **HIGH** | No server needed, pure CDN hosting |

---

## Implementation Priority

### Phase 1: Foundation (Must Have)
1. Next.js 16.1.1 + React 19 + TypeScript
2. Tailwind CSS v4.0
3. shadcn/ui (button, card, form components)
4. React Hook Form + Zod

### Phase 2: Core Features (Must Have)
5. Resend email integration
6. Telegram Bot API for notifications
7. Sonner toast notifications
8. Vercel Analytics

### Phase 3: Polish (Should Have)
9. Framer Motion (tasteful animations for hero section only)
10. SEO optimization (Next.js metadata API)

---

## Version Summary (Quick Reference)

```json
{
  "dependencies": {
    "next": "^16.1.1",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.53.0",
    "zod": "^3.23.8",
    "@hookform/resolvers": "^3.9.0",
    "resend": "^4.0.0",
    "sonner": "^1.5.0",
    "framer-motion": "^11.11.0",
    "@vercel/analytics": "^1.3.1",
    "tailwindcss": "^4.0.0",
    "telegraf": "^4.16.3"
  },
  "devDependencies": {
    "typescript": "^5.6.0",
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "prettier": "^3.3.3",
    "eslint": "^9.0.0",
    "eslint-config-next": "16.1.1"
  }
}
```

**Note:** Versions verified against Context7 docs and 2026 web searches. Always run `npm install <package>@latest` to get current stable releases.

---

## Key Architectural Decisions

### Why Static Export vs. Dynamic Rendering?

**Decision:** Use `output: 'export'` for static site generation

**Rationale:**
- No CMS = content is hard-coded in components
- Better performance: pure CDN hosting, no cold starts
- Lower cost: no server/serverless function costs
- PROJECT.md states: "site is static" and "no blog/CMS"

**Trade-off:**
- Server Actions must be implemented via API routes for contact form
- No ISR (Incremental Static Regeneration) - must redeploy to update content

**Workaround:**
- Contact form can use API route (`/api/contact`) that calls Resend + Telegram
- Redeployment is fast (Vercel CI/CD) and content changes are infrequent

### Why Server Actions for Forms?

**Decision:** Use Next.js Server Actions for form handling

**Rationale:**
- Type-safe end-to-end (schema validation → server logic)
- No need to define API route contracts
- Cleaner code: validation + email sending in one async function
- Better DX with React Hook Form

**Implementation Note:**
- With `output: 'export'`, Server Actions won't work directly
- **Solution:** Create `/api/contact` route that mimics Server Action pattern
- Keep validation logic reusable between client and server

### Why No CMS?

**Decision:** Hard-code content in React components

**Rationale:**
- PROJECT.md: "content lives on social platforms, site is static"
- Fewer moving parts = faster, more reliable
- Content updates are infrequent enough to justify code deployment

**When to Reconsider:**
- If non-technical team members need to update content
- If adding blog section (currently out of scope)

---

## Sources

All recommendations verified against:
- [Next.js Documentation](https://nextjs.org/)
- [React & Next.js Best Practices 2025](https://strapi.io/blog/react-and-nextjs-in-2025-modern-best-practices)
- [Next.js Best Practices 2026](https://www.serviots.com/blog/nextjs-development-best-practices)
- [B2B Website Best Practices 2026](https://www.tilipmandigital.com/resource-center/articles/best-b2b-websites)
- [Tailwind CSS v4.0 Release](https://tailwindcss.com/blog/tailwindcss-v4)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs/installation/next)
- [Resend Next.js Integration](https://resend.com/nextjs)
- [Telegram Bot API Documentation](https://core.telegram.org/bots/api)
- [Vercel Analytics Privacy Policy](https://vercel.com/docs/analytics/privacy-policy)
- [React Server Components Performance](https://www.developerway.com/posts/react-server-components-performance)
- [Framer Motion Performance Tips](https://tillitsdone.com/blogs/framer-motion-performance-tips/)
- [Zod + React Hook Form Guide](https://www.contentful.com/blog/react-hook-form-validation-zod/)

---

**Confidence:** Overall stack is **HIGH CONFIDENCE** for B2B marketing site on Vercel in 2026.

**Next Steps:**
1. Initialize Next.js 16 project with TypeScript
2. Configure Tailwind CSS v4
3. Install shadcn/ui CLI and copy base components
4. Set up form validation with React Hook Form + Zod
5. Integrate Resend email + Telegram Bot API
6. Add Vercel Analytics
7. Configure `output: 'export'` for static deployment
