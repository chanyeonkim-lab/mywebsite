// CaseStudies — Multi-color case study grid with Hyundai Motor emphasized (2x size)

import CaseStudyCard from './CaseStudyCard';

const cards = [
  {
    title: 'Hyundai Motor Company: Agentforce Adoption at Scale',
    duration: '2023 - Present (12+ months)',
    role: 'Lead Solution Engineer - AI & Data Adoption',
    impact1: '20+ AI use cases designed',
    impact2: '30+ stakeholders engaged',
    impact3: '5+ executive-level sessions',
    impact4: 'Vehicle → Message → Delivery (end-to-end)',
    story:
      'HQ IT was skeptical of external AI due to accuracy and security concerns. Business teams wanted full contact center automation. I bridged the gap by proving value with industry-specific use cases on real connected car data. Developed a phased GTM strategy: Phase 1 (internal agents constrained by HQ AI Gateway certification) → Phase 2 (customer-facing agents). Now feeding into global rollout.',
    borderColor: '#0E7490', // Cyan
    accentColor: '#0E7490',
    bgColor: '#ECFEFF',
    featured: true,
  },
  {
    title: 'LG Electronics: Global Data Platform & AI Foundation',
    duration: '2021 - Present (3+ years)',
    role: 'Account Solution Engineer - Data Cloud Specialist',
    impact1: '100M+ customer profiles unified',
    impact2: '3-year global rollout (US, Europe, Asia)',
    impact3: 'Real-time data pipeline design',
    impact4: 'C-suite to engineering bridge',
    story:
      'LG needed a global marketing standard across fragmented regional systems. I led Salesforce Data Cloud architecture, connecting data lakes and building the foundation for AI-ready enterprise scale. The shift: from "deploy the tool" to "design the data foundation first."',
    borderColor: '#FF8C42', // Orange
    accentColor: '#FF8C42',
    bgColor: '#FFE8D4',
    featured: false,
  },
  {
    title: 'Samsung Electronics: SaaS Platform Adoption at Scale',
    duration: '2014 - 2021 (7+ years)',
    role: 'Pre-Sales Consultant → Customer Success → Account Engineer',
    impact1: "Korea's first global SaaS platform",
    impact2: 'IT governance across 6+ stakeholders',
    impact3: 'Enterprise adoption methodology',
    impact4: 'Foundation for digital transformation',
    story:
      "I've been part of Samsung's digital transformation journey — from Oracle pre-sales to Salesforce global rollout. This experience taught me that enterprise adoption isn't about technology announcements. It's about understanding how work actually happens, and building systems that fit.",
    borderColor: '#7C3AED', // Violet
    accentColor: '#7C3AED',
    bgColor: '#F3E8FF',
    featured: false,
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-white py-20 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy">Case Studies</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Enterprise technology delivered at Hyundai Motor, LG, and Samsung — real impact, real scale.
          </p>
        </div>

        {/* Grid: Featured card (Hyundai) takes 2 columns on desktop */}
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <CaseStudyCard 
              key={card.title} 
              {...card}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
