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
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-gray-100 py-20 md:py-28 lg:py-36">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container size="lg">
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Decorative accent line */}
          <div className="flex justify-center mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-[1.1] tracking-tight">
            {headline}
          </h1>

          <p className="mt-6 md:mt-8 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            {subheadline}
          </p>

          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href={primaryCTALink} variant="primary" size="lg">
              {primaryCTA}
            </Button>
            {secondaryCTA && secondaryCTALink && (
              <Button href={secondaryCTALink} variant="secondary" size="lg">
                {secondaryCTA}
              </Button>
            )}
          </div>
        </div>
      </Container>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
