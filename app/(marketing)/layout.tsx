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
      <main>{children}</main>
      <footer className="bg-gray-900 text-gray-400 py-8">
        <Container size="lg">
          <div className="text-center">
            <p>
              &copy; {new Date().getFullYear()} Procevo AI. All rights
              reserved.
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
}
