export type CaseStudyResult = {
  metric: string;
  value: string;
};

export type CaseStudyCardProps = {
  title: string;
  client: string;
  problem: string;
  solution: string;
  results: CaseStudyResult[];
  tags?: string[];
};

export function CaseStudyCard({
  title,
  client,
  problem,
  solution,
  results,
  tags,
}: CaseStudyCardProps) {
  return (
    <article className="group relative bg-white rounded-2xl p-8 md:p-10 border border-gray-200 hover:border-brand-200 transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/5">
      {/* Decorative gradient on hover - matches ServiceCard */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-50/0 to-brand-100/0 group-hover:from-brand-50/50 group-hover:to-brand-100/30 transition-all duration-300" />

      <div className="relative">
        <p className="text-sm font-medium text-brand-500 tracking-wide mb-2">
          {client}
        </p>
        <h3 className="font-display text-2xl md:text-3xl text-gray-900 mb-6 tracking-tight">
          {title}
        </h3>

        <div className="space-y-6">
          {/* Problem */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
              Problem
            </h4>
            <p className="text-gray-600 leading-relaxed">{problem}</p>
          </div>

          {/* Solution */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
              Solution
            </h4>
            <p className="text-gray-600 leading-relaxed">{solution}</p>
          </div>

          {/* Results */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
              Results
            </h4>
            <div className="grid gap-3 sm:grid-cols-2">
              {results.map((result, index) => (
                <div key={index} className="bg-brand-50 rounded-lg p-4">
                  <p className="text-2xl font-display font-bold text-brand-600">
                    {result.value}
                  </p>
                  <p className="text-sm text-gray-700">{result.metric}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
