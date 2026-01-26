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
    <section className="py-16 md:py-24 bg-brand-50">
      <Container size="md">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {heading}
          </h2>
          {subheading && (
            <p className="text-lg text-gray-700 mb-8">{subheading}</p>
          )}
          <Button href={ctaLink} variant="primary" size="lg">
            {ctaText}
          </Button>
        </div>
      </Container>
    </section>
  );
}
