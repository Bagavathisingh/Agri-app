import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Features', href: '#features' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Monitoring', href: '#monitoring' },
  { label: 'ROI', href: '#roi' },
  { label: 'Market', href: '#market' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <a href="#hero" className="navbar__logo" onClick={e => handleNavClick(e, '#hero')}>
          <div className="navbar__logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5v-5.5H8l4-8v5.5h3l-4 8z"
                fill="url(#logo-grad)"/>
              <defs>
                <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#4ade80"/>
                  <stop offset="100%" stopColor="#10b981"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">Intelligent Farming</span>
            <span className="navbar__logo-tag">IF — Agro-Smart</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <ul className="navbar__links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={e => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="navbar__actions">
          <a href="#dashboard" className="btn btn-primary navbar__cta"
            onClick={e => handleNavClick(e, '#dashboard')}>
            Live Dashboard
          </a>
          <button
            className={`navbar__hamburger ${mobileOpen ? 'open' : ''}`}
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${mobileOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <a key={link.href} href={link.href} className="navbar__mobile-link"
            onClick={e => handleNavClick(e, link.href)}>
            {link.label}
          </a>
        ))}
        <a href="#dashboard" className="btn btn-primary"
          onClick={e => handleNavClick(e, '#dashboard')}>
          Live Dashboard
        </a>
      </div>
    </nav>
  );
}
