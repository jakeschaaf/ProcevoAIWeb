import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

type CTAProps = {
  heading: string;
  subheading?: string;
  ctaText: string;
  ctaLink: string;
};

export function CTA({ heading, subheading, ctaText, ctaLink }: CTAProps) {
  return (
    <section className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
      {/* Warm gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-600/5 rounded-full blur-[120px]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Grain */}
      <div className="grain absolute inset-0 pointer-events-none" />

      <Container size="md">
        <div className="relative text-center">
          {/* Decorative lines */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent-500/50" />
            <div className="w-2 h-2 bg-accent-500 rounded-full" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent-500/50" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-slate-100 mb-6 tracking-tight italic">
            {heading}
          </h2>
          {subheading && (
            <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
              {subheading}
            </p>
          )}
          <Button
            href={ctaLink}
            variant="primary"
            size="lg"
          >
            {ctaText}
            <svg
              className="ml-2 w-4 h-4"
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
          </Button>
        </div>
      </Container>
    </section>
  );
}
