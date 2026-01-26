import { Container } from '@/components/ui/container';

interface PainPoint {
  title: string;
  description: string;
}

interface PainPointsProps {
  sectionTitle?: string;
  points: PainPoint[];
}

const icons = [
  // Clock/Time icon
  <svg key="time" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // Document/Data icon
  <svg key="data" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>,
  // Disconnected/Puzzle icon
  <svg key="disconnect" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
  </svg>,
];

export function PainPoints({
  sectionTitle = 'Sound familiar?',
  points,
}: PainPointsProps) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container size="lg">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-brand-500 tracking-widest uppercase mb-4">
            Common Challenges
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-gray-900 tracking-tight">
            {sectionTitle}
          </h2>
        </div>

        <div className="grid gap-8 md:gap-6 lg:gap-10 md:grid-cols-3">
          {points.map((point, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 border border-transparent hover:border-gray-200"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-brand-500 mb-6 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 transition-all duration-300">
                {icons[index % icons.length]}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-tight">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {point.description}
              </p>

              {/* Decorative number */}
              <div className="absolute top-6 right-6 text-6xl font-display text-gray-100 group-hover:text-brand-100 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
