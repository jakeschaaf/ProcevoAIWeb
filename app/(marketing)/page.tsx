import type { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { PainPoints } from '@/components/pain-points';
import { CTA } from '@/components/cta';
import { CaseStudyCard } from '@/components/case-study-card';
import { Container } from '@/components/ui/container';
import { invoiceSplitterCaseStudy } from '@/data/case-studies';

export const metadata: Metadata = {
  title: 'Custom Automation for Mid-Market Companies',
  description:
    'Stop losing time to manual processes. Procevo AI helps stretched teams automate repetitive tasks and integrate disconnected systems.',
  openGraph: {
    title: 'Procevo AI - Custom Automation for Mid-Market Companies',
    description:
      'Stop losing time to manual processes. We help stretched teams automate repetitive tasks.',
  },
};

export default function Home() {
  return (
    <main>
      <Hero
        headline="Stop losing time to manual processes"
        subheadline="Your team is stretched thin. We help mid-market companies automate repetitive tasks and integrate disconnected systems—so you can focus on growth instead of data entry."
        primaryCTA="Schedule a Free Consultation"
        primaryCTALink="/contact"
        secondaryCTA="See How We Work"
        secondaryCTALink="/services"
      />
      <PainPoints
        sectionTitle="Sound familiar?"
        points={[
          {
            title: 'Your Team is Stretched Thin',
            description:
              "Key people are buried in tasks that don't need human judgment. They're too busy putting out fires to work on what actually grows the business.",
          },
          {
            title: 'Manual Data Entry is Eating Your Day',
            description:
              'Hours lost to copying data between systems, fixing spreadsheet errors, and reconciling reports that should update themselves.',
          },
          {
            title: "Your Systems Don't Talk to Each Other",
            description:
              'Information lives in silos. Getting a complete picture means logging into five different tools and hoping nothing falls through the cracks.',
          },
        ]}
      />

      <section className="py-20 md:py-28 bg-gray-50">
        <Container size="lg">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-brand-500 tracking-widest uppercase mb-4">
              Proof It Works
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-gray-900 tracking-tight">
              Real Results
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <CaseStudyCard {...invoiceSplitterCaseStudy} />
          </div>

          <div className="text-center mt-10">
            <a
              href="/case-studies"
              className="inline-flex items-center gap-2 text-brand-500 hover:text-brand-600 font-medium transition-colors"
            >
              View All Case Studies
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </Container>
      </section>

      <CTA
        heading="Ready to get your time back?"
        subheading="Let's talk about what's slowing your team down and how automation can help."
        ctaText="Schedule a Free Consultation"
        ctaLink="/contact"
      />
    </main>
  );
}
