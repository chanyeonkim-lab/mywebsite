// Summary — personal mission statement section

export default function Summary() {
  return (
    <section id="summary" className="py-20 md:py-24 px-6" style={{ backgroundColor: '#F9F5F0' }}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-10 text-center">
          What I Do
        </h2>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            I've worked with Korea's largest enterprises for 14 years. Samsung, LG, Hyundai.
            The pattern is always the same: a promising new technology, an excited business team,
            a skeptical IT organization, and a gap in the middle.
          </p>

          <p>
            The challenge isn't the technology itself. It's organizational readiness. Enterprise
            leaders don't need another impressive demo. They need to know the solution will do
            what it says, integrate with existing systems, and meet the compliance requirements
            their legal and IT teams demand.
          </p>

          <p>
            I specialize in filling that gap — translating technical capability into business
            trust, and solving the adoption challenges that stall most enterprise programs.
            From pilot to production, I help organizations move forward with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
