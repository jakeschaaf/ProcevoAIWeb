import type { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { ServiceCard } from '@/components/service-card';
import { CTA } from '@/components/cta';
import { Container } from '@/components/ui/container';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Custom automation projects and consulting for mid-market companies. We help you eliminate manual work and streamline operations.',
  openGraph: {
    title: 'Services - Procevo AI',
    description:
      'Custom automation projects and consulting for mid-market companies.',
  },
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        headline="Two Ways We Help You Work Smarter"
        subheadline="Whether you need a complete automation solution or help optimizing your processes, we've got you covered."
        primaryCTA="Schedule a Free Consultation"
        primaryCTALink="/contact"
      />

      <section className="py-20 md:py-28 bg-white">
        <Container size="lg">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-brand-500 tracking-widest uppercase mb-4">
              Our Services
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-gray-900 tracking-tight">
              Choose Your Path Forward
            </h2>
          </div>
          <div className="grid gap-8 lg:gap-10 lg:grid-cols-2">
            <ServiceCard
              title="Custom Automation & AI Projects"
              tagline="From concept to deployment"
              description="We build tailored automation solutions that eliminate repetitive work and connect your disconnected systems. No cookie-cutter templates—every project is designed around how your team actually works."
              outcomes={[
                'Eliminate hours of manual data entry each week',
                "Connect systems that currently don't talk to each other",
                'Automate report generation and distribution',
                'Build custom workflows that match your exact process',
              ]}
              idealFor="Ideal for teams drowning in manual processes who need a solution built specifically for their workflow."
            />

            <ServiceCard
              title="Consulting & Process Optimization"
              tagline="See your operations clearly"
              description="Before you automate, you need to understand what's actually happening. We map your processes, identify bottlenecks, and create SOPs that your team can follow—whether you automate or not."
              outcomes={[
                'Clear documentation of how work actually gets done',
                'Identified bottlenecks and inefficiencies',
                'Standard Operating Procedures your team will use',
                'Roadmap for automation priorities',
              ]}
              idealFor="Ideal for companies who know something is broken but aren't sure where to start."
            />
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <Container size="lg">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-brand-500 tracking-widest uppercase mb-4">
              Our Process
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-gray-900 tracking-tight mb-4">
              Simple Process, Real Results
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We keep it straightforward. No endless meetings or confusing
              proposals.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

            <div className="grid gap-8 md:gap-6 md:grid-cols-3">
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white border-2 border-brand-500 text-brand-500 font-display text-2xl mb-6 shadow-sm">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Discovery Call
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  We learn about your challenges and see if we&apos;re a good fit. No
                  pressure, no sales pitch.
                </p>
              </div>
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white border-2 border-brand-500 text-brand-500 font-display text-2xl mb-6 shadow-sm">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Solution Design
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  We map out exactly what we&apos;ll build and how it solves your
                  problem. Clear scope, clear timeline.
                </p>
              </div>
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white border-2 border-brand-500 text-brand-500 font-display text-2xl mb-6 shadow-sm">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Build & Deploy
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  We build it, test it with your team, and make sure it works
                  before we call it done.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTA
        heading="Let's talk about what's slowing you down"
        subheading="Schedule a free consultation to discuss your challenges and see how we can help."
        ctaText="Schedule a Free Consultation"
        ctaLink="/contact"
      />
    </>
  );
}
