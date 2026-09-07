// CaseStudyCard — Multi-color case study card with featured size option

export default function CaseStudyCard({
  title,
  duration,
  role,
  impact1,
  impact2,
  impact3,
  impact4,
  story,
  borderColor,
  accentColor,
  bgColor,
  featured = false,
}) {
  const impacts = [impact1, impact2, impact3, impact4].filter(Boolean);

  return (
    <article
      className={`bg-white rounded-xl shadow-md border-l-4 
                  p-6 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-xl
                  transition-all duration-200
                  ${featured ? 'md:col-span-2' : ''}`}
      style={{ borderLeftColor: borderColor }}
    >
      {/* Header */}
      <div>
        <h3 className="text-lg font-bold text-navy leading-snug mb-1">{title}</h3>
        <p className="text-sm text-gray-500">{duration}</p>
        <p className="text-sm font-semibold mt-0.5" style={{ color: accentColor }}>
          {role}
        </p>
      </div>

      {/* Impact metrics */}
      <ul className={`grid gap-2 ${featured ? 'md:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2'}`}>
        {impacts.map((item) => (
          <li
            key={item}
            className="text-sm font-semibold rounded-lg px-3 py-2 leading-tight"
            style={{ color: accentColor, backgroundColor: bgColor }}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Story */}
      <p className="text-gray-600 text-sm leading-relaxed">{story}</p>
    </article>
  );
}
