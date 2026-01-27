import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { ContactForm } from '@/components/contact-form';

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
      <Container size="lg">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-medium text-brand-500 tracking-widest uppercase mb-4">
            Get in Touch
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight mb-6">
            Let&apos;s Talk
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Ready to eliminate manual work and streamline your operations? Reach
            out and let&apos;s discuss how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 max-w-5xl mx-auto">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Send a Message
              </h2>
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-brand-600"
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
                <h3 className="font-semibold text-gray-900">Email</h3>
              </div>
              <a
                href="mailto:jake@procevo.ai"
                className="text-brand-600 hover:text-brand-700 font-medium transition-colors"
              >
                jake@procevo.ai
              </a>
              <p className="text-sm text-gray-500 mt-2">
                I typically respond within 24 hours.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-brand-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.54a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364l1.757 1.757"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">LinkedIn</h3>
              </div>
              <a
                href="https://www.linkedin.com/company/procevo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:text-brand-700 font-medium transition-colors"
              >
                Connect on LinkedIn
              </a>
              <p className="text-sm text-gray-500 mt-2">
                Follow for updates and insights.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">Quick Response</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Most inquiries receive a response within a few hours during
                business days. For urgent matters, email directly.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
