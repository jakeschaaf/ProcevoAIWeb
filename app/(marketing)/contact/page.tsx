import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Procevo AI. Schedule a free consultation to discuss how we can help automate your processes.',
  openGraph: {
    title: 'Contact - Procevo AI',
    description:
      'Schedule a free consultation to discuss your automation needs.',
  },
};

export default function ContactPage() {
  return (
    <section className="py-20 md:py-28">
      <Container size="md">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-brand-500 tracking-widest uppercase mb-4">
            Get in Touch
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight mb-6">
            Let&apos;s Talk
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Ready to eliminate manual work and streamline your operations?
            Reach out and let&apos;s discuss how we can help.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 shadow-sm">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-100 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-brand-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Email Us Directly
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                Full contact form coming soon. For now, reach out via email.
              </p>
            </div>

            <a
              href="mailto:jake@procevo.ai"
              className="block w-full py-4 px-6 bg-gray-900 hover:bg-gray-800 text-white text-center font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
            >
              jake@procevo.ai
            </a>

            <p className="text-center text-sm text-gray-500 mt-6">
              I typically respond within 24 hours.
            </p>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Prefer to learn more first?
            </p>
            <div className="mt-3 flex justify-center gap-4">
              <Button href="/services" variant="secondary" size="sm">
                View Services
              </Button>
              <Button href="/about" variant="secondary" size="sm">
                About Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
