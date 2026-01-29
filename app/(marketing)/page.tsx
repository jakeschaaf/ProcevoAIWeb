import type { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { PainPoints } from '@/components/pain-points';
import { CTA } from '@/components/cta';
import { CaseStudyCard } from '@/components/case-study-card';
import { Container } from '@/components/ui/container';
import { invoiceSplitterCaseStudy } from '@/data/case-studies';

export const metadata: Metadata = {
  title: 'Custom Automation for Mid-Market Companies | Procevo AI',
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
        tagline="AI-powered automation for mid-market teams"
        subheadline="Your best people are losing hours to tasks that don't need human judgment. We build custom AI systems that handle the thinking, not just the clicking."
        primaryCTA="Schedule a Free Consultation"
        primaryCTALink="/contact"
        secondaryCTA="See How We Work"
        secondaryCTALink="/services"
        showAnimation
      />
      <PainPoints
        sectionTitle="Sound familiar?"
        points={[
          {
            title: 'Your Best People Are Stretched Too Thin',
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

      <section className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="grain absolute inset-0 pointer-events-none" />

        <Container size="lg">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-8 bg-accent-500/50" />
              <span className="text-accent-500 text-sm font-medium tracking-widest uppercase">
                Proof It Works
              </span>
              <div className="h-px w-8 bg-accent-500/50" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-slate-100 tracking-tight italic">
              Real Results
            </h2>
          </div>

          <div className="max-w-3xl mx-auto relative">
            <CaseStudyCard {...invoiceSplitterCaseStudy} />
          </div>

          <div className="text-center mt-10">
            <a
              href="/case-studies"
              className="inline-flex items-center gap-2 text-accent-500 hover:text-accent-400 font-medium transition-colors duration-300"
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
