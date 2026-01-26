import type { Metadata } from 'next';
import { Hero } from '@/components/hero';
import { PainPoints } from '@/components/pain-points';
import { CTA } from '@/components/cta';

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
      <CTA
        heading="Ready to get your time back?"
        subheading="Let's talk about what's slowing your team down and how automation can help."
        ctaText="Schedule a Free Consultation"
        ctaLink="/contact"
      />
    </main>
  );
}
