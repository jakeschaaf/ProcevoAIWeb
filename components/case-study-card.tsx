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
    <article className="group relative bg-slate-800/30 rounded-2xl p-8 md:p-10 border border-slate-700/50 hover:border-accent-500/30 transition-all duration-500">
      {/* Accent glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">
        <p className="text-sm font-medium text-accent-500 tracking-wide mb-2">
          {client}
        </p>
        <h3 className="font-display text-2xl md:text-3xl text-slate-100 mb-6 tracking-tight italic">
          {title}
        </h3>

        <div className="space-y-6">
          {/* Problem */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Problem
            </h4>
            <p className="text-slate-400 leading-relaxed">{problem}</p>
          </div>

          {/* Solution */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Solution
            </h4>
            <p className="text-slate-400 leading-relaxed">{solution}</p>
          </div>

          {/* Results */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">
              Results
            </h4>
            <div className="grid gap-3 sm:grid-cols-2">
              {results.map((result, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4">
                  <p className="text-2xl font-display font-bold text-accent-500 italic">
                    {result.value}
                  </p>
                  <p className="text-sm text-slate-400">{result.metric}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="mt-6 pt-6 border-t border-slate-700/50">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-slate-800 text-slate-400 border border-slate-700/50 px-3 py-1 rounded-full"
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
