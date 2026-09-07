// ExpertiseAreas — 3 expertise boxes with orange theme on white background

const BriefcaseIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
  </svg>
);

const DatabaseIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path strokeLinecap="round" d="M3 5v14c0 1.657 4.03 3 9 3s9-1.343 9-3V5" />
    <path strokeLinecap="round" d="M3 12c0 1.657 4.03 3 9 3s9-1.343 9-3" />
  </svg>
);

const UsersIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87M16 7a4 4 0 11-8 0 4 4 0 018 0zM22 20v-2a4 4 0 00-3-3.87M2 20v-2a4 4 0 013-3.87" />
  </svg>
);

const areas = [
  {
    Icon: BriefcaseIcon,
    title: 'Pre-Sales Technical Excellence',
    points: [
      'Use case scoping & validation',
      'Technical champion building',
      'POC execution & governance',
    ],
  },
  {
    Icon: DatabaseIcon,
    title: 'Data-First Technology Adoption',
    points: [
      'Enterprise data architecture',
      'Master data management',
      'Real-time pipeline design',
      'Salesforce Data Cloud 5+ years',
    ],
  },
  {
    Icon: UsersIcon,
    title: 'Enterprise Leadership',
    points: [
      'C-suite to engineering communication',
      'Cross-regional team enablement',
      'Korea / APAC market expertise',
      'Technology governance & compliance',
    ],
  },
];

export default function ExpertiseAreas() {
  return (
    <section id="expertise" className="bg-white py-20 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy">Expertise Areas</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Three pillars that define how I drive enterprise technology from idea to production.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {areas.map(({ Icon, title, points }) => (
            <div
              key={title}
              className="bg-white rounded-xl shadow-sm border-t-4 
                          p-7 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200"
              style={{ borderTopColor: '#FF8C42' }}
            >
              <Icon className="w-8 h-8" style={{ color: '#FF8C42' }} />
              <h3 className="text-lg font-bold" style={{ color: '#FF8C42' }}>
                {title}
              </h3>
              <ul className="space-y-2">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
