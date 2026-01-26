import { Container } from '@/components/ui/container';

interface PainPoint {
  title: string;
  description: string;
}

interface PainPointsProps {
  sectionTitle?: string;
  points: PainPoint[];
}

export function PainPoints({
  sectionTitle = 'Sound familiar?',
  points,
}: PainPointsProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container size="lg">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          {sectionTitle}
        </h2>
        <div className="grid gap-8 md:gap-12 md:grid-cols-3">
          {points.map((point, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {point.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
