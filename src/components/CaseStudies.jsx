// CaseStudies — Multi-color case study grid with Hyundai Motor emphasized (2x size)

import CaseStudyCard from './CaseStudyCard';

const cards = [
  {
    title: 'Hyundai Motor Group: First Global AI Agent — from PoC to Production',
    role: 'Strategic Advisor on CRM Adoption & AI Agent Deployment',
    impact1: 'Live in US contact center',
    impact2: '2 PoC cycles over 6 months',
    impact3: '20+ enablement sessions',
    impact4: '6-driver, 3-year ROI case',
    story:
      "Led Hyundai Motor Group's first global AI agent deployment from pilot to production. Built a quantified ROI and business value case mapping six value drivers to a three-year consumption ramp — submitted as evidence for HQ IT's formal AI Gateway review. Simultaneously served as the group's strategic advisor on CRM adoption, monitoring usage and underutilization across Sales, Marketing, Service, and Data Foundation in 20 countries, and translating findings into a change-management roadmap that shaped Center of Excellence planning.",
    borderColor: '#0E7490',
    accentColor: '#0E7490',
    bgColor: '#ECFEFF',
    featured: true,
  },
  {
    title: 'LG Electronics: Customer Data Platform Across 20 Countries',
    role: 'Strategic Account Owner — 4-Year Success Plan',
    impact1: '200M+ customer profiles unified',
    impact2: '20-country rollout',
    impact3: '30 journey automation programs',
    impact4: '4 years of continuous ownership',
    story:
      "Won LG Electronics' first Customer Data Platform selection through an executive-level presentation, then owned the account for four years. Authored and continuously updated the strategic account plan while leading global expansion — unifying 200M+ customer profiles for personalized marketing and orchestrating 30 journey-automation programs across regions. The through-line: from selling the platform to sustaining and expanding real value realization.",
    borderColor: '#FF8C42',
    accentColor: '#FF8C42',
    bgColor: '#FFE8D4',
    featured: false,
  },
  {
    title: "Samsung Electronics: Global SaaS Marketing Platform",
    role: 'Customer Success Lead → Enablement Owner (spanning 3 employers)',
    impact1: "Korea's first global SaaS marketing platform",
    impact2: '7-country initial rollout',
    impact3: 'Aligned US / Europe / Samsung SDS',
    impact4: 'Partner onboarding & use-case build',
    story:
      "Led Samsung Electronics' first global SaaS marketing platform across seven countries — from selection through sustained production usage — owning the customer lifecycle across implementation, change management, and managed services. More recently, for Samsung's ongoing global marketing transformation, designed a workaround for country-level access-control and security constraints, then enabled implementation partners through onboarding on a new product and hands-on use-case building.",
    borderColor: '#7C3AED',
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
            Enterprise AI adoption and customer success delivered at Hyundai Motor, LG, and Samsung — real impact, real scale.
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
