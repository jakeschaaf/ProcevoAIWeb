---
phase: 04-lead-capture-system
plan: 01
subsystem: api
tags: [nextjs, resend, telegram, zod, contact-form, api-routes]

requires:
  - phase: 01-foundation-infrastructure
    provides: Next.js project with Vercel deployment
provides:
  - POST /api/contact endpoint with Zod validation
  - Resend email integration (lib/email.ts)
  - Telegram notification integration (lib/telegram.ts)
  - Contact form Zod schema with honeypot field
affects: [04-02 contact form UI, deployment env vars]

tech-stack:
  added: [resend@4, react-hook-form, zod, @hookform/resolvers]
  patterns: [lazy service client initialization, parallel notification dispatch]

key-files:
  created:
    - app/api/contact/route.ts
    - lib/contact-schema.ts
    - lib/email.ts
    - lib/telegram.ts
  modified:
    - next.config.ts
    - package.json

key-decisions:
  - "Removed output: export to enable API routes on Vercel"
  - "Downgraded resend to v4 for TypeScript compatibility"
  - "Lazy Resend client initialization to avoid build-time env var requirement"

patterns-established:
  - "Lazy service client: instantiate third-party clients inside functions, not at module scope"
  - "Honeypot anti-spam: silently succeed on bot submissions"
  - "Parallel notification dispatch: Promise.all for independent side effects"

duration: 3min
completed: 2026-01-27
---

# Phase 4 Plan 1: Contact Form Backend Summary

**POST /api/contact with Zod validation, Resend email, Telegram notifications, and honeypot anti-spam**

## Performance

- **Duration:** 3 min
- **Started:** 2026-01-27T14:58:37Z
- **Completed:** 2026-01-27T15:01:33Z
- **Tasks:** 2
- **Files modified:** 6

## Accomplishments
- Removed static export to enable serverless API routes on Vercel
- Created /api/contact POST endpoint with full validation pipeline
- Integrated Resend email and Telegram notification in parallel
- Added honeypot field for bot detection (silent success response)

## Task Commits

Each task was committed atomically:

1. **Task 1: Remove static export and install dependencies** - `689b1eb` (chore)
2. **Task 2: Create contact form API route with validation, email, and Telegram** - `3339bfa` (feat)

## Files Created/Modified
- `next.config.ts` - Removed output: "export" to enable API routes
- `package.json` - Added resend, react-hook-form, zod, @hookform/resolvers
- `lib/contact-schema.ts` - Zod schema with email, name, company, message, honeypot
- `lib/email.ts` - Resend integration with lazy client and formatted text emails
- `lib/telegram.ts` - Telegram Bot API integration with graceful degradation
- `app/api/contact/route.ts` - POST handler with validation, honeypot, parallel notifications

## Decisions Made
- Removed `output: "export"` from next.config.ts - required for API routes to work on Vercel
- Downgraded resend from v6.9 to v4 - v6.9 has broken `.d.mts` type definitions (`void 0` syntax) incompatible with Next.js build
- Lazy Resend client initialization - module-level `new Resend()` throws during build when env var is absent
- Used `.issues` instead of `.errors` on ZodError - newer Zod versions use `issues` property

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed ZodError property access**
- **Found during:** Task 2 (API route creation)
- **Issue:** Plan used `error.errors` but Zod uses `error.issues`
- **Fix:** Changed to `error.issues`
- **Files modified:** app/api/contact/route.ts
- **Verification:** Build passes
- **Committed in:** 3339bfa

**2. [Rule 3 - Blocking] Downgraded resend to v4**
- **Found during:** Task 2 (build verification)
- **Issue:** resend v6.9 has broken `.d.mts` type definitions that fail Next.js TypeScript checking
- **Fix:** Installed resend@4 which has compatible type definitions
- **Files modified:** package.json, package-lock.json
- **Verification:** `npm run build` succeeds
- **Committed in:** 3339bfa

**3. [Rule 3 - Blocking] Lazy Resend client initialization**
- **Found during:** Task 2 (build verification)
- **Issue:** `new Resend(process.env.RESEND_API_KEY)` at module scope throws during build when env var is not set
- **Fix:** Moved client instantiation into a factory function called at runtime
- **Files modified:** lib/email.ts
- **Verification:** `npm run build` succeeds without RESEND_API_KEY
- **Committed in:** 3339bfa

---

**Total deviations:** 3 auto-fixed (1 bug, 2 blocking)
**Impact on plan:** All fixes necessary for build to succeed. No scope creep.

## Issues Encountered
None beyond the auto-fixed deviations above.

## User Setup Required
Environment variables needed for production:
- `RESEND_API_KEY` - Resend API key for email delivery
- `TELEGRAM_BOT_TOKEN` - Telegram bot token for notifications
- `TELEGRAM_CHAT_ID` - Telegram chat ID for notification target

## Next Phase Readiness
- API endpoint ready for frontend contact form (Plan 04-02)
- Environment variables must be configured on Vercel before live use

---
*Phase: 04-lead-capture-system*
*Completed: 2026-01-27*
