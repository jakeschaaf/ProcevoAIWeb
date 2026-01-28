import Link from 'next/link';
import { Container } from '@/components/ui/container';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800 py-16">
      <div className="grain absolute inset-0 pointer-events-none" />

      <Container className="relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="font-display text-xl text-slate-100 tracking-tight italic">
                Procevo
              </span>
              <span className="text-accent-500 text-2xl font-light">.</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Intelligent automation for mid-market companies. We build custom
              systems that eliminate repetitive work and connect disconnected
              tools.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-accent-500 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:jake@procevo.ai"
                  className="text-sm text-slate-400 hover:text-accent-500 transition-colors duration-300"
                >
                  jake@procevo.ai
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/procevo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-accent-500 transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Procevo AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-slate-600">
              Designed with precision in mind.
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
