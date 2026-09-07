// DemoSection — YouTube demo video with light beige background

export default function DemoSection({ demoLink = 'https://www.youtube.com/embed/k5g9nvlXxnE' }) {
  return (
    <section id="demo" className="py-20 md:py-24 px-6" style={{ backgroundColor: '#F9F5F0' }}>
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-3">
            Live Demo: End to End Customer Journey with Agentic AI
          </h2>
          <p className="font-semibold text-lg" style={{ color: '#FF8C42' }}>
            Built with Claude API + Salesforce architecture
          </p>
          <p className="text-gray-500 text-sm mt-1">
            (Real automation tools I'm delivering to enterprise customers)
          </p>
        </div>

        {/* YouTube iframe */}
        <div className="rounded-2xl overflow-hidden shadow-xl border-2" style={{ borderColor: '#FF8C42' }}>
          {/* Fake browser chrome */}
          <div className="bg-gray-100 px-4 py-2.5 flex items-center gap-3 border-b border-gray-200">
            <span className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
            </span>
            <span className="flex-1 bg-white rounded-md px-3 py-1 text-gray-400 text-xs font-mono truncate">
              https://youtu.be/k5g9nvlXxnE
            </span>
          </div>

          {/* Responsive YouTube iframe — 16:9 ratio */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={demoLink}
              title="Enterprise Customer Journey Demo"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Context */}
        <p className="mt-8 text-gray-600 text-base leading-relaxed max-w-3xl mx-auto text-center">
          Salesforce + Claude API integration demonstrating automated customer support with
          enterprise-grade safety. This is the foundation for how we're helping Hyundai Motor
          transform customer engagement — from inquiry classification to response generation.
        </p>
      </div>
    </section>
  );
}
