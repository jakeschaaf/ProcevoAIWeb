import type { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { CaseStudyCard } from '@/components/case-study-card';
import { CTA } from '@/components/cta';
import { Container } from '@/components/ui/container';
import { allCaseStudies } from '@/data/case-studies';

export const metadata: Metadata = {
  title: 'Case Studies | Procevo AI',
  description:
    'Real automation projects with measurable results. See how we help mid-market companies save time and eliminate errors.',
  openGraph: {
    title: 'Case Studies - Procevo AI',
    description:
      'Real automation projects with measurable results for mid-market companies.',
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Hero
        headline="Real Results for Real Companies"
        subheadline="We don't just talk about automation—we build it. Here's what we've accomplished for companies just like yours."
        primaryCTA="Start Your Project"
        primaryCTALink="/contact"
      />

      <section className="relative py-24 md:py-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="grain absolute inset-0 pointer-events-none" />

        <Container size="lg" className="relative">
          <div className="grid gap-8 lg:gap-10">
            {allCaseStudies.map((caseStudy, index) => (
              <div key={index} className="max-w-3xl mx-auto w-full">
                <CaseStudyCard {...caseStudy} />
              </div>
            ))}
          </div>

          {allCaseStudies.length === 1 && (
            <div className="mt-16 text-center">
              <p className="text-slate-500 text-lg">
                More case studies coming soon as we grow.
              </p>
            </div>
          )}
        </Container>
      </section>

      <CTA
        heading="Ready to become our next success story?"
        subheading="Let's talk about the manual work that's slowing your team down."
        ctaText="Schedule a Free Consultation"
        ctaLink="/contact"
      />
    </>
  );
}
