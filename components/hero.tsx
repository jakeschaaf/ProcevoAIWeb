import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

type HeroProps = {
  headline: string;
  subheadline: string;
  primaryCTA: string;
  primaryCTALink: string;
  secondaryCTA?: string;
  secondaryCTALink?: string;
};

export function Hero({
  headline,
  subheadline,
  primaryCTA,
  primaryCTALink,
  secondaryCTA,
  secondaryCTALink,
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      {/* Sophisticated grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Diagonal lines accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full lines-pattern opacity-20" />

      {/* Warm glow from accent color */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-600/8 rounded-full blur-[120px]" />

      {/* Grain texture overlay */}
      <div className="grain absolute inset-0 pointer-events-none" />

      <Container size="lg" className="relative z-10">
        <div className="max-w-4xl pt-20">
          {/* Editorial accent */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-accent-500" />
            <span className="text-accent-500 text-sm font-medium tracking-widest uppercase">
              Intelligent Automation
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-100 leading-[1.1] tracking-tight">
            <span className="italic">{headline}</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            {subheadline}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 items-start">
            <Button href={primaryCTALink} variant="primary" size="lg">
              {primaryCTA}
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
            {secondaryCTA && secondaryCTALink && (
              <Button href={secondaryCTALink} variant="secondary" size="lg">
                {secondaryCTA}
              </Button>
            )}
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-slate-800">
            <p className="text-sm text-slate-500 mb-4">Trusted by operations teams at</p>
            <div className="flex flex-wrap gap-8 items-center text-slate-600">
              <span className="text-sm font-medium tracking-wide">Mid-Market Companies</span>
              <span className="hidden sm:block w-px h-4 bg-slate-800" />
              <span className="text-sm font-medium tracking-wide">20+ Years Experience</span>
              <span className="hidden sm:block w-px h-4 bg-slate-800" />
              <span className="text-sm font-medium tracking-wide">Custom Solutions</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Decorative vertical line */}
      <div className="absolute bottom-0 left-1/2 w-px h-24 bg-gradient-to-t from-transparent via-slate-700 to-transparent" />
    </section>
  );
}
