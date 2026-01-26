import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Container } from '@/components/ui/container';

export const metadata: Metadata = {
  title: {
    template: '%s | Procevo AI',
    default: 'Procevo AI',
  },
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      {/* Spacer for fixed navigation */}
      <div className="h-16 md:h-20" />
      <main>{children}</main>
      <footer className="bg-gray-950 text-gray-400 py-12 md:py-16">
        <Container size="lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="font-display text-xl text-white">
                Procevo<span className="text-brand-500">.</span>
              </span>
            </div>
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Procevo AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="/contact"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}
