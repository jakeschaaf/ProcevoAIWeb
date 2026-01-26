import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCTA: string;
  primaryCTALink: string;
  secondaryCTA?: string;
  secondaryCTALink?: string;
}

export function Hero({
  headline,
  subheadline,
  primaryCTA,
  primaryCTALink,
  secondaryCTA,
  secondaryCTALink,
}: HeroProps) {
  return (
    <section className="bg-gray-50 py-16 px-4 md:py-24 lg:py-32">
      <Container size="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {headline}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            {subheadline}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href={primaryCTALink}>
              {primaryCTA}
            </Button>
            {secondaryCTA && secondaryCTALink && (
              <Button variant="secondary" size="lg" href={secondaryCTALink}>
                {secondaryCTA}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
