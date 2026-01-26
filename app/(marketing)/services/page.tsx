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

      <section className="py-16 md:py-24 bg-white">
        <Container size="lg">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
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

      <section className="py-16 md:py-24 bg-gray-50">
        <Container size="md">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Simple Process, Real Results
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto">
            We keep it straightforward. No endless meetings or confusing
            proposals.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="text-5xl font-bold text-brand-500 mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Discovery Call
              </h3>
              <p className="text-gray-700">
                We learn about your challenges and see if we&apos;re a good fit. No
                pressure, no sales pitch.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-brand-500 mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Solution Design
              </h3>
              <p className="text-gray-700">
                We map out exactly what we&apos;ll build and how it solves your
                problem. Clear scope, clear timeline.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-brand-500 mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Build & Deploy
              </h3>
              <p className="text-gray-700">
                We build it, test it with your team, and make sure it works
                before we call it done.
              </p>
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
