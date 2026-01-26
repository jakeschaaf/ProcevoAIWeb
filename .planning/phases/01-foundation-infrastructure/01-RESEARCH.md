# Phase 1 Research: Foundation & Infrastructure

**Researched:** 2026-01-26
**Domain:** Next.js 16 + Tailwind CSS v4 + Vercel Deployment
**Confidence:** HIGH

## Summary

Phase 1 establishes the technical foundation for a B2B marketing website using Next.js 16 with static export, Tailwind CSS v4, and Vercel hosting. The research focused on implementation specifics for the chosen stack (already decided in STACK.md), not alternative evaluations.

Key findings: Next.js 16 provides zero-config Vercel deployment with automatic HTTPS, Tailwind v4 offers dramatic performance improvements with simplified configuration, and static export mode is ideal for no-CMS marketing sites. The main gotcha is that static export eliminates API routes, requiring workarounds for contact forms.

**Primary recommendation:** Use `create-next-app` with TypeScript + Tailwind defaults, configure `output: 'export'` immediately, and plan contact form as client-side submission to external service (Resend via API endpoint workaround or direct client-side SDK).

## Standard Stack

### Core Framework
| Library | Version | Purpose | Installation |
|---------|---------|---------|-------------|
| Next.js | 16.1.1 | React framework with App Router | `npx create-next-app@latest` |
| React | 19.0.0 | UI library (peer dependency) | Auto-installed with Next.js |
| TypeScript | 5.x | Type safety | `--typescript` flag in create-next-app |

**Installation command:**
```bash
npx create-next-app@latest my-project --typescript --eslint --app
cd my-project
```

**Source:** [Next.js 16.1.1 Context7 Documentation](https://github.com/vercel/next.js/blob/v16.1.1/docs/01-app/03-api-reference/06-cli/create-next-app.mdx)

### Styling & UI
| Library | Version | Purpose | Installation |
|---------|---------|---------|-------------|
| Tailwind CSS | 4.0.0 | Utility-first CSS framework | `npm install tailwindcss @tailwindcss/postcss postcss` |
| shadcn/ui | Latest (no version) | Copy-paste component library | `npx shadcn@latest init` |

**Tailwind CSS v4 Installation:**
```bash
# Install Tailwind v4
npm install tailwindcss @tailwindcss/postcss postcss

# Create PostCSS config
cat > postcss.config.mjs << 'EOF'
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
EOF

# Update globals.css
echo '@import "tailwindcss";' > app/globals.css
```

**shadcn/ui Installation:**
```bash
npx shadcn@latest init
# Prompts will ask for style (Default vs New York), TypeScript preference
# Then add components as needed:
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add form
```

**Sources:**
- [Tailwind CSS v4 Next.js Guide](https://tailwindcss.com/docs/guides/nextjs)
- [shadcn/ui Next.js Installation](https://ui.shadcn.com/docs/installation/next)

### Analytics & Deployment
| Library | Version | Purpose | Installation |
|---------|---------|---------|-------------|
| @vercel/analytics | 1.3.1+ | Privacy-first visitor tracking | `npm install @vercel/analytics` |
| Vercel CLI | Latest | Deployment (optional) | `npm install -g vercel` |

**Vercel Analytics Setup:**
```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

**Sources:**
- [Vercel Analytics Quickstart](https://vercel.com/docs/analytics/quickstart)
- [Vercel Analytics npm Package](https://www.npmjs.com/package/@vercel/analytics)

## Architecture Patterns

### Recommended Project Structure

For a B2B marketing site with static export:

```
my-project/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout (Analytics here)
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # @import "tailwindcss"
│   ├── about/
│   │   └── page.tsx             # About page
│   ├── services/
│   │   └── page.tsx             # Services page
│   └── contact/
│       └── page.tsx             # Contact page
├── components/
│   ├── ui/                      # shadcn/ui components (auto-generated)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── form.tsx
│   └── layout/                  # Site layout components
│       ├── header.tsx
│       ├── footer.tsx
│       └── nav.tsx
├── lib/
│   └── utils.ts                 # Utility functions (cn helper)
├── public/
│   ├── images/
│   └── favicon.ico
├── next.config.ts               # Static export config
├── postcss.config.mjs           # Tailwind v4 config
├── tsconfig.json                # TypeScript config
└── package.json
```

**Sources:**
- [Next.js Project Structure Guide](https://nextjs.org/docs/app/getting-started/project-structure)
- [Next.js 16 Best Practices](https://dev.to/bajrayejoon/best-practices-for-organizing-your-nextjs-15-2025-53ji)

### Pattern 1: Static Export Configuration

**What:** Configure Next.js to generate static HTML/CSS/JS for CDN hosting

**When to use:** Marketing sites with no dynamic server-side logic

**Example:**
```typescript
// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  // Optional: Change output directory from 'out' to 'build'
  // distDir: 'build',
}

export default nextConfig
```

**Source:** [Next.js 16.1.1 Static Export Configuration](https://github.com/vercel/next.js/blob/v16.1.1/docs/01-app/02-guides/static-exports.mdx)

### Pattern 2: Design System with Tailwind v4 Theme Variables

**What:** Define design tokens using CSS variables in `@theme` block

**When to use:** Professional B2B sites needing consistent typography and colors

**Example:**
```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  /* Typography Scale - Professional B2B */
  --font-sans: ui-sans-serif, system-ui, sans-serif;
  --font-serif: ui-serif, Georgia, "Times New Roman", serif;

  /* Brand Colors - Monochrome + Accent (B2B Standard) */
  --color-brand-50: oklch(98% 0.01 250);
  --color-brand-500: oklch(50% 0.15 250);
  --color-brand-900: oklch(20% 0.08 250);

  /* Neutral Gray Scale */
  --color-gray-50: oklch(98% 0 0);
  --color-gray-500: oklch(60% 0 0);
  --color-gray-900: oklch(20% 0 0);
}
```

**Source:** [Tailwind CSS v4 Theme Documentation](https://tailwindcss.com/docs/theme)

### Pattern 3: Server Components by Default

**What:** All components are Server Components unless marked with "use client"

**When to use:** Maximize performance by keeping most components server-rendered

**Example:**
```tsx
// components/layout/header.tsx (Server Component - no directive needed)
export function Header() {
  return <header>...</header>
}

// components/ui/contact-form.tsx (Client Component - needs interactivity)
"use client"
import { useState } from 'react'

export function ContactForm() {
  const [email, setEmail] = useState('')
  return <form>...</form>
}
```

**Source:** [Next.js App Router Best Practices](https://thiraphat-ps-dev.medium.com/mastering-next-js-app-router-best-practices-for-structuring-your-application-3f8cf0c76580)

### Anti-Patterns to Avoid

- **Over-using "use client":** Only add to components with interactivity (forms, modals). Header/footer/cards should be Server Components.
- **Putting everything in app/:** Use `components/` and `lib/` directories for organization
- **Deep nesting (>4 levels):** Makes components hard to find, keep structure flat
- **Ignoring Next.js Image optimization:** Even with static export, use `<Image unoptimized />` for better DX

**Source:** [Next.js Folder Structure Best Practices 2026](https://www.codebydeep.com/blog/next-js-folder-structure-best-practices-for-scalable-applications-2026-guide)

## Don't Hand-Roll

Problems that look simple but have existing solutions:

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| CSS utility classes | Custom utility CSS | Tailwind CSS v4 | 10k+ utilities, responsive variants, dark mode built-in |
| Accessible UI components | Custom modals/dialogs | shadcn/ui + Radix | ARIA compliance, keyboard nav, screen reader support |
| Form validation | Manual validation logic | Zod + React Hook Form | Type-safe schemas, better error handling, less boilerplate |
| Image optimization | Manual srcset generation | Next.js `<Image>` | Automatic formats (WebP/AVIF), lazy loading, blur placeholders |
| Analytics tracking | Custom event tracking | @vercel/analytics | GDPR-compliant, no cookies, auto page view tracking |

**Key insight:** B2B marketing sites have solved patterns. Tailwind + shadcn/ui + Next.js Image cover 90% of UI needs without custom components.

## Common Pitfalls

### Pitfall 1: API Routes Don't Work with Static Export

**What goes wrong:** Developer adds API route for contact form (`app/api/contact/route.ts`), builds with `output: 'export'`, receives error: "API routes are not supported with static exports"

**Why it happens:** Static export generates only HTML/CSS/JS files—no server to handle API requests

**How to avoid:**
- Option A: Use client-side form submission to external service (Resend SDK, Formspree)
- Option B: Deploy without static export (keep server for API routes, loses pure CDN benefits)
- Option C: Use serverless function on different platform (Vercel Edge Functions work even with static sites)

**Warning signs:** Any `app/api/` directory or Server Actions with `"use server"` won't work in static export

**Source:** [Next.js Static Export API Routes Warning](https://nextjs.org/docs/messages/api-routes-static-export)

### Pitfall 2: Image Component Requires `unoptimized` Prop

**What goes wrong:** Using `<Image src="/logo.png" width={200} height={50} />` throws build error with static export

**Why it happens:** Next.js Image Optimization API requires server for dynamic image processing

**How to avoid:** Add `unoptimized` prop: `<Image src="..." unoptimized />`

**Alternative:** Configure in `next.config.ts`:
```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true }
}
```

**Warning signs:** Build errors mentioning "Image Optimization requires server"

**Source:** [Next.js Static Exports Guide](https://nextjs.org/docs/app/guides/static-exports)

### Pitfall 3: Forgetting to Configure PostCSS for Tailwind v4

**What goes wrong:** Tailwind classes don't apply, seeing raw HTML without styles

**Why it happens:** Tailwind v4 requires `@tailwindcss/postcss` plugin, not the old v3 plugin

**How to avoid:**
1. Install correct packages: `npm install tailwindcss @tailwindcss/postcss postcss`
2. Create `postcss.config.mjs` with `"@tailwindcss/postcss": {}`
3. Use `@import "tailwindcss"` in CSS file (NOT old `@tailwind` directives)

**Warning signs:**
- Seeing `@import "tailwindcss"` not resolved
- No styles applied despite classes in HTML
- Console warnings about unknown `@tailwind` directives (means you're mixing v3/v4 syntax)

**Source:** [Tailwind CSS v4 Installation Guide](https://tailwindcss.com/docs/guides/nextjs)

### Pitfall 4: Vercel Auto-Deploy Happens Before Testing Locally

**What goes wrong:** Push to main branch, Vercel auto-deploys broken build to production

**Why it happens:** Vercel's GitHub integration auto-deploys all commits to main by default

**How to avoid:**
- Test locally first: `npm run build` before pushing
- Use Git Flow: develop on feature branches, merge to main only after testing
- Enable Vercel Preview Deployments: every PR gets preview URL before merging

**Warning signs:** Production site breaking immediately after push

**Source:** [Vercel Deployment Best Practices](https://vercel.com/docs/deployments)

### Pitfall 5: Missing TypeScript Path Aliases

**What goes wrong:** Import paths like `import { Button } from '../../../../components/ui/button'` become unmaintainable

**Why it happens:** Default TypeScript config doesn't include `@/` alias

**How to avoid:** Verify `tsconfig.json` has:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

Then use: `import { Button } from '@/components/ui/button'`

**Warning signs:** Long relative import paths, import errors after moving files

**Source:** [Next.js TypeScript Configuration](https://nextjs.org/docs/app/getting-started/project-structure)

## Code Examples

### Example 1: Complete next.config.ts for Static Export

```typescript
// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export', // Static site generation
  images: {
    unoptimized: true // Required for static export
  },
  eslint: {
    ignoreDuringBuilds: false // Fail build on lint errors
  },
  typescript: {
    ignoreBuildErrors: false // Fail build on type errors
  }
}

export default nextConfig
```

**Source:** [Next.js 16.1.1 Configuration Reference](https://github.com/vercel/next.js/blob/v16.1.1/docs/01-app/02-guides/static-exports.mdx)

### Example 2: Root Layout with Analytics

```tsx
// app/layout.tsx
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Procevo AI - B2B AI Consulting',
  description: 'Enterprise AI solutions that deliver measurable results',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

**Source:** [Vercel Analytics React Integration](https://vercel.com/docs/analytics/package)

### Example 3: Design System Setup (globals.css)

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  /* Typography - Professional B2B */
  --font-sans: "Inter var", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Lexend", ui-sans-serif, system-ui, sans-serif;

  /* Brand Colors - Monochrome + Blue Accent */
  --color-brand-50: oklch(97% 0.02 250);
  --color-brand-100: oklch(94% 0.04 250);
  --color-brand-500: oklch(55% 0.15 250);
  --color-brand-600: oklch(45% 0.13 250);
  --color-brand-900: oklch(20% 0.08 250);

  /* Neutral Palette */
  --color-gray-50: oklch(98% 0 0);
  --color-gray-100: oklch(96% 0 0);
  --color-gray-200: oklch(90% 0 0);
  --color-gray-700: oklch(40% 0 0);
  --color-gray-900: oklch(15% 0 0);

  /* Spacing Scale */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
}

/* Custom utility for professional container */
@layer components {
  .container-professional {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--spacing-md);
    padding-right: var(--spacing-md);
  }
}
```

**Source:** [Tailwind CSS v4 Theme Variables](https://tailwindcss.com/docs/theme)

### Example 4: Homepage Structure

```tsx
// app/page.tsx
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function HomePage() {
  return (
    <main className="container-professional">
      {/* Hero Section */}
      <section className="py-xl text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-md">
          Enterprise AI That Delivers Results
        </h1>
        <p className="text-xl text-gray-700 mb-lg">
          B2B AI consulting for mid-market companies ready to scale
        </p>
        <Button size="lg">Get Started</Button>
      </section>

      {/* Services Preview */}
      <section className="grid md:grid-cols-3 gap-lg py-xl">
        <Card>
          <h3 className="text-2xl font-semibold mb-sm">AI Strategy</h3>
          <p className="text-gray-700">...</p>
        </Card>
        {/* More cards */}
      </section>
    </main>
  )
}
```

**Source:** [Next.js App Router Pages](https://nextjs.org/docs/app/getting-started/project-structure)

## Deployment Configuration

### Vercel Deployment: Zero-Config Setup

**Key Features:**
- **Automatic HTTPS:** SSL certificates provisioned automatically for all domains (both `.vercel.app` and custom domains)
- **Git Integration:** Auto-deploy on push to main branch via GitHub/GitLab/Bitbucket
- **Preview Deployments:** Every PR gets unique preview URL
- **Edge Network:** Static files served from global CDN (180+ edge locations)
- **Build Time:** 10-30 seconds typical for marketing site

**Manual Deployment Steps:**
```bash
# Option 1: CLI deployment
npm install -g vercel
vercel login
vercel --prod

# Option 2: GitHub integration (recommended)
# 1. Push repo to GitHub
# 2. Go to vercel.com/new
# 3. Import Git repository
# 4. Vercel auto-detects Next.js, click Deploy
```

**Automatic Deployment:**
Once GitHub is connected:
- Push to `main` → Production deployment
- Open PR → Preview deployment with unique URL
- No manual steps needed after initial setup

**Sources:**
- [Vercel Next.js Documentation](https://vercel.com/docs/frameworks/full-stack/nextjs)
- [Vercel Automatic HTTPS](https://vercel.com/docs/deployments)

### Environment Variables (For Future Phases)

When adding Resend/Telegram integrations:

```bash
# .env.local (gitignored)
RESEND_API_KEY=re_xxx
TELEGRAM_BOT_TOKEN=xxx
TELEGRAM_CHAT_ID=xxx
```

Configure in Vercel dashboard under Settings → Environment Variables

**Source:** [Vercel Environment Variables](https://vercel.com/docs/deployments)

## Design System Foundation

### Typography Scale

Based on B2B professional best practices for 2026:

| Element | Size | Weight | Use Case |
|---------|------|--------|----------|
| Hero Headline | 3rem (48px) | 700 Bold | Homepage h1 |
| Page Title | 2.25rem (36px) | 600 Semibold | Page h1 |
| Section Heading | 1.875rem (30px) | 600 Semibold | h2 |
| Subsection | 1.5rem (24px) | 600 Semibold | h3 |
| Body Large | 1.125rem (18px) | 400 Regular | Intro text |
| Body | 1rem (16px) | 400 Regular | Paragraphs |
| Small | 0.875rem (14px) | 400 Regular | Footer, captions |

**Font Recommendations:**
- **Sans-serif:** Inter, Lexend, or system-ui (professional, readable)
- **Avoid:** Display fonts for body text, overly decorative typefaces

### Color Palette

**2026 B2B Trend:** Monochrome + single accent color (sophisticated, professional)

**Recommended Palette:**
```
Primary Brand: Deep Blue or Charcoal
- 50: Very light (backgrounds)
- 500: Medium (buttons, links)
- 900: Very dark (headings)

Neutral Gray:
- 50-100: Backgrounds, subtle borders
- 700-900: Text, headings

Accent (Optional):
- Neon accent for CTAs (teal, cyan) - used sparingly
```

**Why Monochrome:**
- Timeless sophistication (finance, legal, consulting prefer this)
- Easy to maintain consistency
- Emphasizes content over decoration
- Aligns with 2026 trend toward clarity and "reset" aesthetic (Pantone Cloud Dancer)

**Sources:**
- [B2B Website Design Trends 2026](https://www.tilipmandigital.com/resource-center/articles/best-b2b-websites)
- [Color Trends 2026](https://www.loungelizard.com/blog/web-design-color-trends/)

### Responsive Breakpoints

Tailwind CSS v4 default breakpoints (keep these):

```
sm:  640px  (mobile landscape)
md:  768px  (tablet)
lg:  1024px (desktop)
xl:  1280px (large desktop)
2xl: 1536px (wide screens)
```

**Mobile-First Strategy:**
- Design for mobile (320px-640px) first
- Add `md:` prefix for tablet adjustments
- Add `lg:` prefix for desktop enhancements

**Source:** [Tailwind CSS Responsive Design](https://tailwindcss.com/docs/responsive-design)

## State of the Art

| Old Approach | Current Approach (2026) | When Changed | Impact |
|--------------|-------------------------|--------------|--------|
| `next export` command | `output: 'export'` in config | Next.js 14 (2024) | Simpler, no extra build step |
| Tailwind v3 JS config | Tailwind v4 CSS `@theme` | Dec 2024 | 5x faster builds, CSS-native |
| `@tailwind` directives | `@import "tailwindcss"` | Tailwind v4 | Single import, cleaner syntax |
| Pages Router | App Router | Next.js 13+ | Server Components, better DX |
| Manual Analytics Setup | `<Analytics />` component | 2023+ | One-line integration |

**Deprecated/outdated:**
- `next export` CLI command → Use `output: 'export'` in config
- `tailwind.config.js` → Use `@theme` in CSS file
- `@tailwind base/components/utilities` → Use `@import "tailwindcss"`
- Custom webpack config for fonts → Next.js `next/font` handles optimization

**Sources:**
- [Next.js 14 Export Command Removal](https://github.com/vercel/next.js/discussions/58790)
- [Tailwind CSS v4 Upgrade Guide](https://tailwindcss.com/docs/upgrade-guide)

## Risks & Mitigations

### Risk 1: Contact Form Can't Use API Routes

**Severity:** HIGH
**Impact:** Core requirement (email + Telegram notifications) blocked by static export

**Mitigation Options:**
1. **Client-side SDK (Recommended):** Use Resend's client SDK from browser, send Telegram notification via webhook URL
2. **Remove static export:** Keep `output: 'export'` out of config, deploy with serverless functions
3. **External form service:** Use Formspree, Tally, or similar (adds external dependency)

**Decision needed:** Clarify in Phase 2 planning whether pure static export is required or serverless is acceptable

### Risk 2: Tailwind v4 Browser Support Too New

**Severity:** MEDIUM
**Impact:** Users on older browsers see unstyled content

**Browser Requirements:**
- Safari 16.4+ (Apr 2023)
- Chrome 111+ (Mar 2023)
- Firefox 128+ (Jul 2024)

**Mitigation:** Check Google Analytics for existing site's browser stats. If >5% users on older browsers, use Tailwind v3 instead.

**Source:** [Tailwind CSS v4 Browser Support](https://tailwindcss.com/docs/upgrade-guide)

### Risk 3: First Deployment Takes Longer Than Expected

**Severity:** LOW
**Impact:** Milestone timeline delay if deployment debugging takes hours

**Common Issues:**
- DNS propagation for custom domain (24-48 hours)
- Build fails due to TypeScript errors ignored locally
- Missing environment variables

**Mitigation:**
- Deploy to `.vercel.app` subdomain first (instant)
- Run `npm run build` locally before pushing
- Configure environment variables in Vercel dashboard early

### Risk 4: Design System Changes Mid-Phase

**Severity:** MEDIUM
**Impact:** Rework all components if color palette or typography changes

**Mitigation:**
- Define design tokens in Phase 1 before building components
- Use CSS variables (`--color-brand-500`) not hardcoded values
- Get stakeholder approval on design system before Phase 2

## Open Questions

1. **Contact Form Implementation:**
   - What we know: Static export blocks API routes
   - What's unclear: Is pure static export a hard requirement, or can we use serverless functions?
   - Recommendation: Clarify in Phase 2 planning. If static-only is required, use client-side form submission.

2. **Custom Domain Configuration:**
   - What we know: Vercel auto-provisions SSL
   - What's unclear: Does user already own domain, or need to purchase?
   - Recommendation: Verify domain availability before Phase 1 completion.

3. **Font Loading Strategy:**
   - What we know: Next.js `next/font` optimizes Google Fonts
   - What's unclear: Should we use Google Fonts (Inter/Lexend) or system fonts?
   - Recommendation: Start with system fonts for performance, add custom fonts in Phase 3 if needed.

## Sources

### Primary (HIGH confidence)

- [Next.js 16.1.1 Context7 Documentation](https://github.com/vercel/next.js/blob/v16.1.1) - Static export, configuration, project structure
- [Tailwind CSS Official Documentation](https://tailwindcss.com/docs/guides/nextjs) - v4 installation, theme variables
- [shadcn/ui Next.js Guide](https://ui.shadcn.com/docs/installation/next) - Installation steps
- [Vercel Analytics Package](https://www.npmjs.com/package/@vercel/analytics) - Integration guide

### Secondary (MEDIUM confidence)

- [Next.js Best Practices 2026](https://dev.to/bajrayejoon/best-practices-for-organizing-your-nextjs-15-2025-53ji) - Project structure verified against official docs
- [B2B Website Design Trends 2026](https://www.tilipmandigital.com/resource-center/articles/best-b2b-websites) - Color palette research
- [Tailwind v4 Installation Guide](https://ayushkhatri.hashnode.dev/how-to-install-tailwind-css-v4-in-nextjs-step-by-step-guide) - Step-by-step verified against official docs

### Tertiary (LOW confidence)

- [Medium: How to Build Forms in Next.js 16](https://medium.com/frontendweb/how-to-build-forms-in-2026-using-next-js-16-and-shadcn-step-by-step-guide-44839d0a999c) - Referenced for shadcn/ui compatibility, not for implementation details

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - All libraries verified via Context7 and official docs
- Architecture: HIGH - Next.js 16 patterns documented in official guides
- Deployment: HIGH - Vercel features confirmed via official documentation
- Design system: MEDIUM - Based on 2026 trend analysis (subjective), but color system mechanics are HIGH confidence
- Pitfalls: HIGH - All pitfalls verified via official docs and GitHub discussions

**Research date:** 2026-01-26
**Valid until:** 2026-02-26 (30 days - stack is stable, but check for Next.js 16.x minor releases)
