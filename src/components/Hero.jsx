// Hero — Light beige background with profile photo and orange accents

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 py-20"
      style={{ backgroundColor: '#F9F5F0' }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <p className="text-orange font-semibold tracking-wide uppercase text-sm mb-4">
              Enterprise AI Adoption Leader
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-navy leading-tight mb-6">
              I Help Enterprises
              <br />
              <span className="text-orange">Adopt New Technology</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-lg">
              14 years bridging the gap between innovative solutions and organizational readiness.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#case-studies"
                className="inline-block px-8 py-3.5 rounded-lg font-semibold text-white text-base
                           bg-orange-primary hover:bg-orange-dark transition-colors duration-200
                           shadow-lg hover:shadow-xl"
                style={{
                  backgroundColor: '#FF8C42',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E67E22')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FF8C42')}
              >
                Portfolio
              </a>
              
              <a
                href="#contact"
                className="inline-block px-8 py-3.5 rounded-lg font-semibold text-base
                           bg-white border-2 transition-all duration-200
                           hover:bg-orange-light"
                style={{
                  color: '#FF8C42',
                  borderColor: '#FF8C42',
                }}
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right: Profile Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Circular frame with orange border */}
              <div
                className="rounded-full overflow-hidden border-8 shadow-2xl
                            w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
                style={{ borderColor: '#FF8C42' }}
              >
                <img
                  src="/images/profile.png"
                  alt="Chanyeon Kim - Enterprise AI Adoption Leader"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative element (optional) */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-20"
                style={{ backgroundColor: '#FF8C42' }}
              />
            </div>
          </div>
        </div>

        {/* Trusted by badge (optional) */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">Trusted By</p>
          <div className="flex justify-center gap-8 flex-wrap">
            <span className="text-navy font-semibold text-lg">Hyundai Motor</span>
            <span className="text-gray-400">•</span>
            <span className="text-navy font-semibold text-lg">LG Electronics</span>
            <span className="text-gray-400">•</span>
            <span className="text-navy font-semibold text-lg">Samsung Electronics</span>
          </div>
        </div>
      </div>
    </section>
  );
}
