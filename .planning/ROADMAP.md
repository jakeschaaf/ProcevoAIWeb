# Roadmap: Procevo AI Website

**Created:** 2026-01-26
**Depth:** comprehensive
**Phases:** 8

## Overview

This roadmap transforms Procevo AI's vision into a deployed marketing website through 8 phases. Starting with technical foundation (Next.js, Tailwind, Vercel), we build core pages (homepage, services, about), establish trust (case studies, testimonials), enable lead capture (contact form with email + Telegram), refine messaging, optimize for search and performance, distribute CTAs throughout the site, and finally polish and launch. Each phase delivers standalone value while setting up the next, addressing critical B2B website pitfalls early (vague value proposition, missing trust signals, high-friction contact).

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Foundation & Infrastructure** - Next.js 16 + Tailwind v4 + Vercel deployment pipeline ✓
- [ ] **Phase 2: Core Marketing Pages** - Homepage, Services, About pages with mobile-responsive layouts
- [ ] **Phase 3: Trust & Credibility Layer** - Case studies and testimonials with metrics
- [ ] **Phase 4: Lead Capture System** - Contact form with email + Telegram notifications
- [ ] **Phase 5: Content Refinement** - Results-focused messaging across all pages
- [ ] **Phase 6: SEO & Performance Optimization** - Meta tags, structured data, performance tuning
- [ ] **Phase 7: Multi-CTA Integration** - CTAs distributed throughout site for conversion
- [ ] **Phase 8: Final Polish & Launch** - Legal pages, accessibility, deployment to production

## Phase Details

### Phase 1: Foundation & Infrastructure

**Goal:** Establish technical foundation with deployment pipeline, design system, and analytics

**Depends on:** Nothing (first phase)

**Requirements:**
- TECH-05: Deployed and live on Vercel
- TECH-06: HTTPS enabled
- TECH-02: Vercel Analytics integrated for visitor tracking
- PAGE-08: All pages are mobile-responsive (foundation setup)

**Success Criteria** (what must be TRUE):
1. Next.js 16 project with TypeScript and static export configuration runs locally
2. Tailwind CSS v4 design system is set up with typography, colors, and responsive breakpoints
3. Deployment pipeline automatically builds and deploys to Vercel on push
4. HTTPS is enabled on deployed site
5. Vercel Analytics tracks page views on deployed site

**Plans:** 2 plans in 2 waves

Plans:
- [x] 01-01-PLAN.md — Create Next.js 16 project with Tailwind v4 and Vercel Analytics ✓
- [x] 01-02-PLAN.md — Deploy to Vercel and verify deployment pipeline ✓

---

### Phase 2: Core Marketing Pages

**Goal:** Create primary content pages that communicate value proposition and services

**Depends on:** Phase 1 (foundation must exist)

**Requirements:**
- PAGE-01: Homepage communicates value proposition clearly (passes 5-second test)
- PAGE-02: Homepage addresses target audience pain points (stretched teams, repetitive tasks, disconnected systems)
- PAGE-03: Homepage includes clear call-to-action driving to contact
- PAGE-04: Services page explains custom automation/AI project offerings
- PAGE-05: Services page explains consulting offerings (processes/SOPs)
- PAGE-06: About page showcases founder with 20+ years experience
- PAGE-07: About page tells Procevo AI company story
- PAGE-08: All pages are mobile-responsive (implementation)
- PAGE-09: Professional navigation across all pages

**Success Criteria** (what must be TRUE):
1. Visitor landing on homepage understands who Procevo helps and what outcome they get within 5 seconds
2. Homepage articulates all three pain points (stretched teams, manual data entry, "we've always done it this way")
3. Services page explains both automation/AI projects AND consulting offerings in terms of outcomes, not tools
4. About page establishes founder credibility through 20+ years experience and personal story
5. All pages render correctly on mobile devices (320px to 1920px widths)

**Plans:** TBD

Plans:
- [ ] 02-01: TBD during planning
- [ ] 02-02: TBD during planning
- [ ] 02-03: TBD during planning

---

### Phase 3: Trust & Credibility Layer

**Goal:** Build trust through social proof with case studies and process transparency

**Depends on:** Phase 2 (needs pages to embed trust signals into)

**Requirements:**
- TRUST-01: Case study section with at least one example (invoice splitter)
- TRUST-02: Case studies follow Problem-Solution-Result framework with specific outcomes
- TRUST-03: Process transparency section explaining how Procevo works with clients

**Success Criteria** (what must be TRUE):
1. Invoice splitter case study is visible with Problem-Solution-Result structure and specific metrics (time savings, AP module compatibility)
2. Case studies showcase quantifiable outcomes, not just "we did a project"
3. Visitor can understand what happens after they contact Procevo (process transparency reduces friction)
4. Trust signals are positioned throughout the site, not isolated on one page

**Plans:** TBD

Plans:
- [ ] 03-01: TBD during planning
- [ ] 03-02: TBD during planning

---

### Phase 4: Lead Capture System

**Goal:** Enable frictionless contact with instant notifications for fast response

**Depends on:** Phase 1 (foundation for API routes)

**Requirements:**
- LEAD-01: Contact form with minimal fields (low friction)
- LEAD-02: Contact form sends submission to email
- LEAD-03: Contact form triggers instant Telegram notification
- LEAD-05: Contact page with form and alternative contact methods

**Success Criteria** (what must be TRUE):
1. Visitor can submit contact form with only email (optionally name, company, brief need) in under 30 seconds
2. Form submission sends email to Jake via Resend
3. Form submission triggers instant Telegram notification to Jake's mobile device
4. Form includes client and server-side validation to prevent bad submissions
5. Contact page offers multiple contact methods, not just the form

**Plans:** TBD

Plans:
- [ ] 04-01: TBD during planning
- [ ] 04-02: TBD during planning

---

### Phase 5: Content Refinement

**Goal:** Ensure all copy is results-focused with no technical jargon

**Depends on:** Phase 2 (needs content to refine)

**Requirements:**
- CONT-01: All copy is results-focused, no technical jargon
- CONT-02: Messaging speaks to outcomes and pain relief, not tools/software
- CONT-03: Content written for non-technical decision makers

**Success Criteria** (what must be TRUE):
1. All page copy talks about results and pain relief, not fancy tools and software
2. Non-technical mid-market executive can understand every page without needing to Google terms
3. Value proposition, pain points, and outcomes are clear on every major page (not just homepage)

**Plans:** TBD

Plans:
- [ ] 05-01: TBD during planning

---

### Phase 6: SEO & Performance Optimization

**Goal:** Optimize for search engines and fast load times

**Depends on:** Phase 2 (needs content to optimize)

**Requirements:**
- TECH-01: SEO basics implemented (meta tags, semantic HTML, sitemap)
- TECH-03: Performance optimized (Core Web Vitals, <2 second load)
- TECH-04: AEO optimization for AI search engines (structured data, clear answers)

**Success Criteria** (what must be TRUE):
1. All pages have appropriate meta tags (title, description, Open Graph, Twitter Card)
2. Site loads in under 2 seconds on 4G connection (Core Web Vitals pass)
3. Sitemap.xml and robots.txt exist for search engine crawling
4. Structured data (JSON-LD) is present for AI search engines to parse
5. Images are optimized (WebP/AVIF) and lazy-loaded where appropriate

**Plans:** TBD

Plans:
- [ ] 06-01: TBD during planning
- [ ] 06-02: TBD during planning

---

### Phase 7: Multi-CTA Integration

**Goal:** Distribute calls-to-action throughout site to maximize conversion opportunities

**Depends on:** Phase 4 (lead capture must work) + Phase 2 (pages must exist)

**Requirements:**
- LEAD-04: Multiple CTAs throughout site (not just contact page)

**Success Criteria** (what must be TRUE):
1. Every major page has at least one clear CTA driving to contact
2. CTAs are contextually appropriate to the page content
3. Visitor can reach contact form from any page in one click

**Plans:** TBD

Plans:
- [ ] 07-01: TBD during planning

---

### Phase 8: Final Polish & Launch

**Goal:** Production-ready deployment with legal compliance and accessibility

**Depends on:** Phases 1-7 (everything must be complete)

**Requirements:**
- (No specific requirements from REQUIREMENTS.md, but necessary for professional launch)

**Success Criteria** (what must be TRUE):
1. Privacy policy and terms of service pages exist (legal compliance)
2. Site passes accessibility audit (WCAG 2.1 AA)
3. All links work (no 404s)
4. Cross-browser testing complete (Chrome, Firefox, Safari, Edge)
5. Site is live on production domain with proper DNS configuration

**Plans:** TBD

Plans:
- [ ] 08-01: TBD during planning

---

## Requirement Coverage

| Requirement | Phase | Description |
|-------------|-------|-------------|
| PAGE-01 | 2 | Homepage communicates value proposition clearly (passes 5-second test) |
| PAGE-02 | 2 | Homepage addresses target audience pain points (stretched teams, repetitive tasks, disconnected systems) |
| PAGE-03 | 2 | Homepage includes clear call-to-action driving to contact |
| PAGE-04 | 2 | Services page explains custom automation/AI project offerings |
| PAGE-05 | 2 | Services page explains consulting offerings (processes/SOPs) |
| PAGE-06 | 2 | About page showcases founder with 20+ years experience |
| PAGE-07 | 2 | About page tells Procevo AI company story |
| PAGE-08 | 1, 2 | All pages are mobile-responsive (foundation setup in 1, implementation in 2) |
| PAGE-09 | 2 | Professional navigation across all pages |
| TRUST-01 | 3 | Case study section with at least one example (invoice splitter) |
| TRUST-02 | 3 | Case studies follow Problem-Solution-Result framework with specific outcomes |
| TRUST-03 | 3 | Process transparency section explaining how Procevo works with clients |
| LEAD-01 | 4 | Contact form with minimal fields (low friction) |
| LEAD-02 | 4 | Contact form sends submission to email |
| LEAD-03 | 4 | Contact form triggers instant Telegram notification |
| LEAD-04 | 7 | Multiple CTAs throughout site (not just contact page) |
| LEAD-05 | 4 | Contact page with form and alternative contact methods |
| TECH-01 | 6 | SEO basics implemented (meta tags, semantic HTML, sitemap) |
| TECH-02 | 1 | Vercel Analytics integrated for visitor tracking |
| TECH-03 | 6 | Performance optimized (Core Web Vitals, <2 second load) |
| TECH-04 | 6 | AEO optimization for AI search engines (structured data, clear answers) |
| TECH-05 | 1 | Deployed and live on Vercel |
| TECH-06 | 1 | HTTPS enabled |
| CONT-01 | 5 | All copy is results-focused, no technical jargon |
| CONT-02 | 5 | Messaging speaks to outcomes and pain relief, not tools/software |
| CONT-03 | 5 | Content written for non-technical decision makers |

**Coverage:** 26/26 requirements mapped (100%)

Note: PAGE-08 (mobile-responsive) appears in both Phase 1 (foundation setup for responsive design system) and Phase 2 (implementation across actual pages). This is the only requirement spanning multiple phases, with primary ownership in Phase 2.

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation & Infrastructure | 2/2 | ✓ Complete | 2026-01-26 |
| 2. Core Marketing Pages | 0/0 | Not started | - |
| 3. Trust & Credibility Layer | 0/0 | Not started | - |
| 4. Lead Capture System | 0/0 | Not started | - |
| 5. Content Refinement | 0/0 | Not started | - |
| 6. SEO & Performance Optimization | 0/0 | Not started | - |
| 7. Multi-CTA Integration | 0/0 | Not started | - |
| 8. Final Polish & Launch | 0/0 | Not started | - |

---
*Last updated: 2026-01-26 after Phase 1 completion*
