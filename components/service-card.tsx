interface ServiceCardProps {
  title: string;
  tagline: string;
  description: string;
  outcomes: string[];
  idealFor: string;
}

export function ServiceCard({
  title,
  tagline,
  description,
  outcomes,
  idealFor,
}: ServiceCardProps) {
  return (
    <article className="group relative bg-white rounded-2xl p-8 md:p-10 border border-gray-200 hover:border-brand-200 transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/5">
      {/* Decorative gradient on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-50/0 to-brand-100/0 group-hover:from-brand-50/50 group-hover:to-brand-100/30 transition-all duration-300" />

      <div className="relative">
        <p className="text-sm font-medium text-brand-500 tracking-wide mb-3">
          {tagline}
        </p>
        <h3 className="font-display text-2xl md:text-3xl text-gray-900 mb-4 tracking-tight">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-8">{description}</p>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
            What you get
          </h4>
          <ul className="space-y-3">
            {outcomes.map((outcome, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-3 h-3 text-brand-600"
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
                <span className="text-gray-700 text-[15px]">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500 leading-relaxed">
            <span className="font-medium text-gray-700">Best for: </span>
            {idealFor.replace('Ideal for ', '')}
          </p>
        </div>
      </div>
    </article>
  );
}
