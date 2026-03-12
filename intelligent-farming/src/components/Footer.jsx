import './Footer.css';

const teamMembers = [
  { name: 'BALAPRIYAN B', id: '732523CS006' },
  { name: 'BAGAVATHISINGH B', id: '732523CS005' },
  { name: 'JAYAPREM V', id: '732523CS041' },
];

const footerLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Features', href: '#features' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Architecture', href: '#monitoring' },
  { label: 'ROI Calculator', href: '#roi' },
  { label: 'Market', href: '#market' },
];

const pillars = [
  { icon: '⚡', label: 'Increased Efficiency', desc: 'Leveraging AI and automation for optimal farm operations and resource management.' },
  { icon: '🌿', label: 'Sustainable Growth', desc: 'Promoting eco-friendly practices that ensure long-term environmental and economic health.' },
  { icon: '📊', label: 'Data-Driven Decisions', desc: 'Empowering farmers with real-time insights for enhanced yield and quality.' },
];

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="contact">
      {/* CTA Banner */}
      <div className="footer__cta">
        <div className="footer__cta-bg"></div>
        <div className="container footer__cta-content">
          <div className="footer__cta-text">
            <h2>Ready to Revolutionize Your Farm?</h2>
            <p>Join us in cultivating a more intelligent, efficient, and sustainable world of agriculture.</p>
          </div>
          <div className="footer__cta-actions">
            <button className="btn btn-primary">Get Started Today</button>
            <button className="btn btn-secondary" onClick={() => scrollTo('#dashboard')}>View Live Demo</button>
          </div>
        </div>
      </div>

      {/* Pillars */}
      <div className="footer__pillars-wrap">
        <div className="container">
          <div className="footer__pillars">
            {pillars.map((p, i) => (
              <div key={i} className="footer__pillar">
                <span className="footer__pillar-icon">{p.icon}</span>
                <div>
                  <strong>{p.label}</strong>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="container footer__grid">

          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5v-5.5H8l4-8v5.5h3l-4 8z" fill="url(#footer-grad)"/>
                  <defs>
                    <linearGradient id="footer-grad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#4ade80"/>
                      <stop offset="100%" stopColor="#10b981"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <div className="footer__logo-name">Intelligent Farming</div>
                <div className="footer__logo-tag">IF — Agro-Smart</div>
              </div>
            </div>
            <p className="footer__brand-desc">
              A semi-automated smart farming system bridging the gap between traditional practices and modern, efficient, sustainable food production.
            </p>
            <div className="footer__tech-tags">
              {['IoT', 'AI/ML', 'Cloud', 'LoRa', 'Precision Ag'].map(tag => (
                <span key={tag} className="footer__tech-tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="footer__nav">
            <h4>Navigation</h4>
            {footerLinks.map(link => (
              <a key={link.href} href={link.href} onClick={e => { e.preventDefault(); scrollTo(link.href); }}>
                {link.label}
              </a>
            ))}
          </div>

          {/* Team */}
          <div className="footer__team">
            <h4>Agro-Smart Team</h4>
            {teamMembers.map((m, i) => (
              <div key={i} className="footer__team-member">
                <div className="footer__team-avatar">
                  {m.name.split(' ')[0][0]}
                  {m.name.split(' ').length > 1 ? m.name.split(' ')[1][0] : ''}
                </div>
                <div>
                  <div className="footer__team-name">{m.name}</div>
                  <div className="footer__team-id">{m.id}</div>
                </div>
              </div>
            ))}
            <div className="footer__dept">
              <span>Department of Computer Science</span>
              <span>2022–2026 Batch</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-content">
          <span>© 2026 Intelligent Farming [IF] — Agro-Smart. All rights reserved.</span>
          <span className="footer__bottom-tag">Built with ⚡ for precision agriculture</span>
        </div>
      </div>
    </footer>
  );
}
