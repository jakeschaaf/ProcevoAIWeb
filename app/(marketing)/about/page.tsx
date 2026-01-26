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
      <section className="bg-white py-16 md:py-24">
        <Container size="lg">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Photo placeholder */}
            <div className="mx-auto max-w-md lg:mx-0">
              <div className="flex aspect-square items-center justify-center rounded-2xl bg-gray-200">
                <span className="text-lg text-gray-500">Photo coming soon</span>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Meet Jake Schaaf
              </h2>
              <p className="mb-6 text-lg font-medium text-brand-600">
                Founder & Principal Consultant
              </p>

              <p className="leading-relaxed text-gray-700">
                After two decades in operations and technology, I've seen the
                same story play out countless times: talented teams buried in
                manual work, disconnected systems creating chaos, and leadership
                too overwhelmed to fix it.
              </p>

              <p className="leading-relaxed text-gray-700">
                I started Procevo AI because I got tired of watching mid-market
                companies struggle with problems that shouldn't exist in 2026.
                The tools to eliminate manual data entry, connect your systems,
                and free up your team's time are here—but most companies don't
                have the bandwidth or expertise to implement them.
              </p>

              <p className="leading-relaxed text-gray-700">
                That's where I come in. I bring 20+ years of experience turning
                chaotic operations into smooth, automated workflows. Not with
                cookie-cutter solutions, but with custom automation built around
                how your team actually works.
              </p>

              {/* Experience highlights */}
              <div className="mt-8 border-t border-gray-200 pt-8">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                  Background
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-brand-600">•</span>
                    20+ years in operations and technology
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-brand-600">•</span>
                    Worked with manufacturing, professional services, and higher
                    education
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-brand-600">•</span>
                    Background in process optimization and system integration
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-brand-600">•</span>
                    Hands-on builder, not just a consultant
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Company Story */}
      <section className="bg-gray-50 py-16 md:py-24">
        <Container size="md">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Why Procevo AI Exists
          </h2>

          <div className="space-y-6">
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              The name 'Procevo' comes from 'process' and 'evolution.' It's
              what we do—help your processes evolve from manual, error-prone,
              and time-consuming to automated, reliable, and efficient.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Most mid-market companies know they're leaving money on the table
              with inefficient processes. They see competitors moving faster and
              wonder how. The answer isn't working harder—it's working smarter.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              We exist to bridge the gap between where you are and where you
              want to be. Whether that means building a custom automation that
              saves 20 hours a week or mapping out your processes so you finally
              understand where the bottlenecks are, we're here to help.
            </p>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-white py-16 md:py-24">
        <Container size="lg">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            How We Work
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Straight Talk
              </h3>
              <p className="text-gray-700">
                No jargon, no hidden agendas. We'll tell you what we think, even
                if it's not what you want to hear.
              </p>
            </div>

            <div className="text-center">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Built for You
              </h3>
              <p className="text-gray-700">
                Cookie-cutter solutions don't work. Every engagement is tailored
                to your specific challenges and goals.
              </p>
            </div>

            <div className="text-center">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Results First
              </h3>
              <p className="text-gray-700">
                We measure success by your outcomes, not by hours billed or
                features delivered.
              </p>
            </div>
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
