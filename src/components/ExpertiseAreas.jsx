// ExpertiseAreas — 3 expertise boxes with orange theme on white background

const HandshakeIcon = ({ className, style }) => (
  <svg className={className} style={style} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M13 8l3-3m0 0l3 3m-3-3v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2h5" />
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M8 21h8" />
  </svg>
);

const SparkIcon = ({ className, style }) => (
  <svg className={className} style={style} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M12 3v3m0 12v3m9-9h-3M6 12H3m14.485-6.485l-2.121 2.121M8.636 15.364l-2.121 2.121m0-12.728l2.121 2.121m6.728 6.728l2.121 2.121" />
    <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShieldIcon = ({ className, style }) => (
  <svg className={className} style={style} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M9 12l2 2 4-4" />
  </svg>
);

const areas = [
  {
    Icon: HandshakeIcon,
    title: 'Strategic Customer Success',
    points: [
      'Strategic account & success planning',
      'Quarterly Business Reviews',
      'Usage & consumption planning',
      'Value realization & underutilization recovery',
      'Executive stakeholder management',
    ],
  },
  {
    Icon: SparkIcon,
    title: 'Enterprise AI Adoption & Enablement',
    points: [
      'Claude adoption enablement',
      'Agentic workflow design',
      'Train the Trainer programs',
      'Center of Excellence development',
      'Multi-region change management',
    ],
  },
  {
    Icon: ShieldIcon,
    title: 'AI Governance & Trust',
    points: [
      'AI security review readiness',
      'ISMS / ISMS-P certification experience',
      'LLM governance & prompt design',
      'Data protection compliance',
      'Enterprise data architecture',
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
            Three pillars that define how I drive enterprise AI adoption and customer success — from PoC to sustained production value.
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
