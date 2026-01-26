import type { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { Container } from '@/components/ui/container';
import { CTA } from '@/components/cta';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet Jake Schaaf, founder of Procevo AI, with 20+ years of experience helping companies streamline operations and eliminate manual work.',
  openGraph: {
    title: 'About - Procevo AI',
    description:
      'Meet the founder with 20+ years of experience helping companies work smarter.',
  },
};

export default function AboutPage() {
  return (
    <>
      <Hero
        headline="Built by Someone Who Gets It"
        subheadline="After 20+ years helping companies streamline operations, I started Procevo AI to bring enterprise-level automation to mid-market teams who need it most."
        primaryCTA="Let's Talk"
        primaryCTALink="/contact"
      />

      {/* Founder Section */}
      <section className="bg-white py-20 md:py-28">
        <Container size="lg">
          <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-2">
            {/* Photo placeholder */}
            <div className="mx-auto max-w-md lg:mx-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-brand-100 to-brand-50 rounded-3xl transform -rotate-3" />
                <div className="relative flex aspect-square items-center justify-center rounded-2xl bg-gray-100 border border-gray-200 overflow-hidden">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-500">Photo coming soon</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <p className="text-sm font-medium text-brand-500 tracking-widest uppercase mb-4">
                Meet the Founder
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-gray-900 tracking-tight mb-2">
                Jake Schaaf
              </h2>
              <p className="text-lg text-brand-600 font-medium mb-8">
                Founder & Principal Consultant
              </p>

              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  After two decades in operations and technology, I&apos;ve seen the
                  same story play out countless times: talented teams buried in
                  manual work, disconnected systems creating chaos, and leadership
                  too overwhelmed to fix it.
                </p>

                <p>
                  I started Procevo AI because I got tired of watching mid-market
                  companies struggle with problems that shouldn&apos;t exist in 2026.
                  The tools to eliminate manual data entry, connect your systems,
                  and free up your team&apos;s time are here—but most companies don&apos;t
                  have the bandwidth or expertise to implement them.
                </p>

                <p>
                  That&apos;s where I come in. I bring 20+ years of experience turning
                  chaotic operations into smooth, automated workflows. Not with
                  cookie-cutter solutions, but with custom automation built around
                  how your team actually works.
                </p>
              </div>

              {/* Experience highlights */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-5">
                  Background
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    '20+ years in operations and technology',
                    'Manufacturing, professional services, higher ed',
                    'Process optimization & system integration',
                    'Hands-on builder, not just a consultant',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Company Story */}
      <section className="bg-gray-50 py-20 md:py-28">
        <Container size="md">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-brand-500 tracking-widest uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-gray-900 tracking-tight">
              Why Procevo AI Exists
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              The name &apos;Procevo&apos; comes from &apos;process&apos; and &apos;evolution.&apos; It&apos;s
              what we do—help your processes evolve from manual, error-prone,
              and time-consuming to automated, reliable, and efficient.
            </p>

            <p>
              Most mid-market companies know they&apos;re leaving money on the table
              with inefficient processes. They see competitors moving faster and
              wonder how. The answer isn&apos;t working harder—it&apos;s working smarter.
            </p>

            <p>
              We exist to bridge the gap between where you are and where you
              want to be. Whether that means building a custom automation that
              saves 20 hours a week or mapping out your processes so you finally
              understand where the bottlenecks are, we&apos;re here to help.
            </p>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-white py-20 md:py-28">
        <Container size="lg">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-brand-500 tracking-widest uppercase mb-4">
              Our Values
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-gray-900 tracking-tight">
              How We Work
            </h2>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-3">
            {[
              {
                title: 'Straight Talk',
                description:
                  "No jargon, no hidden agendas. We'll tell you what we think, even if it's not what you want to hear.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                ),
              },
              {
                title: 'Built for You',
                description:
                  "Cookie-cutter solutions don't work. Every engagement is tailored to your specific challenges and goals.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                ),
              },
              {
                title: 'Results First',
                description:
                  'We measure success by your outcomes, not by hours billed or features delivered.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group relative bg-gray-50 rounded-2xl p-8 border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        heading="Let's see if we're a good fit"
        subheading="Schedule a free consultation. No pressure, no sales pitch—just an honest conversation about your challenges."
        ctaText="Schedule a Free Consultation"
        ctaLink="/contact"
      />
    </>
  );
}
