import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

interface CTAProps {
  heading: string;
  subheading?: string;
  ctaText: string;
  ctaLink: string;
}

export function CTA({ heading, subheading, ctaText, ctaLink }: CTAProps) {
  return (
    <section className="relative py-24 md:py-32 bg-gray-900 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />

      <Container size="md">
        <div className="relative text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-6 tracking-tight">
            {heading}
          </h2>
          {subheading && (
            <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
              {subheading}
            </p>
          )}
          <Button
            href={ctaLink}
            variant="primary"
            size="lg"
            className="!bg-white !text-gray-900 hover:!bg-gray-100"
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
