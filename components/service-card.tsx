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
    <article className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-brand-600 font-medium mb-4">{tagline}</p>
      <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
      
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-3">What you get:</h4>
        <ul className="space-y-2">
          {outcomes.map((outcome, index) => (
            <li key={index} className="flex items-start gap-2">
              <svg
                className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">{outcome}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600 italic">{idealFor}</p>
      </div>
    </article>
  );
}
