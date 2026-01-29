import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { HeroAnimation } from '@/components/hero-animation';

type HeroProps = {
  headline: string;
  tagline?: string;
  subheadline: string;
  primaryCTA: string;
  primaryCTALink: string;
  secondaryCTA?: string;
  secondaryCTALink?: string;
  showAnimation?: boolean;
};

export function Hero({
  headline,
  tagline,
  subheadline,
  primaryCTA,
  primaryCTALink,
  secondaryCTA,
  secondaryCTALink,
  showAnimation = false,
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
        <div className={`grid gap-12 lg:gap-16 items-center ${showAnimation ? 'lg:grid-cols-2' : ''}`}>
          {/* Text content */}
          <div className="pt-20 lg:pt-0">
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

            {tagline && (
              <p className="mt-4 text-lg md:text-xl text-accent-500 font-medium">
                {tagline}
              </p>
            )}

            <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
              {subheadline}
            </p>

            <div className="mt-12 flex flex-col gap-3 max-w-md">
              <Button href={primaryCTALink} variant="primary" size="lg" className="w-full justify-center">
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
                <Button href={secondaryCTALink} variant="secondary" size="lg" className="w-full justify-center">
                  {secondaryCTA}
                </Button>
              )}
            </div>
          </div>

          {/* Animation */}
          {showAnimation && (
            <div className="hidden lg:block">
              <HeroAnimation />
            </div>
          )}
        </div>

        {/* Credibility indicators - full width below grid */}
        <div className="mt-20 pt-8 border-t border-slate-800">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-100 font-semibold">20+ Years</p>
                <p className="text-sm text-slate-500">Building software systems</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-100 font-semibold">Custom-Built</p>
                <p className="text-sm text-slate-500">No cookie-cutter templates</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-100 font-semibold">Ongoing Support</p>
                <p className="text-sm text-slate-500">We maintain what we build</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Decorative vertical line */}
      <div className="absolute bottom-0 left-1/2 w-px h-24 bg-gradient-to-t from-transparent via-slate-700 to-transparent" />
    </section>
  );
}
