// About — bio section on light beige background

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 px-6" style={{ backgroundColor: '#F9F5F0' }}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-8">About Me</h2>

        <div className="space-y-5 text-gray-700 text-lg leading-relaxed text-left">
          <p>
            Solutions Engineer with 14 years experience in enterprise application and technology adoption.
            KAIST MBA (AI, Machine Learning). Specialized in data architecture, pre-sales, and
            enterprise leadership. Worked with Korea's largest companies: Samsung, LG, Hyundai Motor.
          </p>
          <p>
            Currently a Lead Solution Engineer at Salesforce Korea, leading AI & Data Cloud
            adoption. I specialize in taking technology from pilot to production by solving the
            trust and governance challenges that stall most enterprise programs.
          </p>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t-2" style={{ borderTopColor: '#FF8C42' }}>
          {[
            { value: '14+', label: 'Years in Solutions Pre-sales' },
            { value: '+20', label: 'Sales & Adoption Engagements with Korean Enterprises (Samsung, LG, Hyundai, and many more)' },
            { value: 'KAIST', label: 'MBA · AI / ML' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl font-extrabold" style={{ color: '#FF8C42' }}>
                {value}
              </div>
              <div className="text-gray-500 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
