// Navigation — sticky navbar with orange active states

import { useState, useEffect } from 'react';

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'Experience', href: '#case-studies' },
  { label: 'Skills', href: '#expertise' },
  { label: 'Demo', href: '#demo' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the link whose section is most visible
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { threshold: 0.4 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
                  ${scrolled ? 'bg-white shadow-md' : 'bg-white/95'}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-navy font-extrabold text-lg tracking-tight">
          Chanyeon <span style={{ color: '#FF8C42' }}>Kim</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className={`text-sm font-medium transition-colors duration-150 pb-0.5
                            ${active === l.href
                              ? 'border-b-2'
                              : 'text-gray-600'
                            }`}
                style={
                  active === l.href
                    ? { color: '#FF8C42', borderBottomColor: '#FF8C42' }
                    : {}
                }
                onMouseEnter={(e) => {
                  if (active !== l.href) {
                    e.currentTarget.style.color = '#FF8C42';
                  }
                }}
                onMouseLeave={(e) => {
                  if (active !== l.href) {
                    e.currentTarget.style.color = '#666666';
                  }
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-navy focus:outline-none"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? (
            // X icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="flex flex-col py-2">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={handleLinkClick}
                  className={`block px-6 py-3 text-sm font-medium transition-colors
                              ${active === l.href
                                ? ''
                                : 'text-gray-700 hover:bg-gray-50'
                              }`}
                  style={
                    active === l.href
                      ? { color: '#FF8C42', backgroundColor: '#FFE8D4' }
                      : {}
                  }
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
