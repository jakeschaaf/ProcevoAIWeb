type ServiceCardProps = {
  title: string;
  tagline: string;
  description: string;
  outcomes: string[];
  idealFor: string;
};

export function ServiceCard({
  title,
  tagline,
  description,
  outcomes,
  idealFor,
}: ServiceCardProps) {
  return (
    <article className="group relative bg-slate-800/30 rounded-2xl p-8 md:p-10 border border-slate-700/50 hover:border-accent-500/30 transition-all duration-500">
      {/* Accent glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">
        <p className="text-sm font-medium text-accent-500 tracking-wide mb-3">
          {tagline}
        </p>
        <h3 className="font-display text-2xl md:text-3xl text-slate-100 mb-4 tracking-tight italic">
          {title}
        </h3>
        <p className="text-slate-400 leading-relaxed mb-8">{description}</p>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
            What you get
          </h4>
          <ul className="space-y-3">
            {outcomes.map((outcome, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-3 h-3 text-accent-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-slate-300 text-[15px]">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-700/50">
          <p className="text-sm text-slate-500 leading-relaxed">
            <span className="font-medium text-slate-400">Best for: </span>
            {idealFor.replace('Ideal for ', '')}
          </p>
        </div>
      </div>
    </article>
  );
}
