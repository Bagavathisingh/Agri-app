import './Benefits.css';

const benefits = [
  {
    icon: '🌾',
    title: 'Increased Yield & Quality',
    desc: 'Precision management of water, nutrients, and pest control leads to healthier crops and significantly higher output.',
    stat: '+30%',
    statLabel: 'Avg. Yield Increase',
    color: '#4ade80',
  },
  {
    icon: '⚡',
    title: 'Optimized Resource Usage',
    desc: 'Intelligent systems minimize waste of water, fertilizers, and pesticides, leading to substantial cost savings and efficiency.',
    stat: '40%',
    statLabel: 'Resource Reduction',
    color: '#fbbf24',
  },
  {
    icon: '🌍',
    title: 'Environmental Sustainability',
    desc: 'Reduced chemical runoff and energy consumption contribute to a healthier ecosystem and sustainable farming practices.',
    stat: '35%',
    statLabel: 'Chemical Reduction',
    color: '#34d399',
  },
  {
    icon: '📊',
    title: 'Enhanced Farm Management',
    desc: 'Real-time data and AI-driven insights empower farmers with better decision-making for proactive farm operations.',
    stat: '24/7',
    statLabel: 'Live Monitoring',
    color: '#60a5fa',
  },
];

export default function Benefits() {
  return (
    <section className="section benefits" id="benefits">
      <div className="container">

        <div className="benefits__header">
          <div className="section-label">
            <span></span>
            <p>Benefits</p>
          </div>
          <h2 className="section-title">Transformative Benefits of Agro-Smart</h2>
          <p className="section-subtitle">
            Implementing Agro-Smart brings a multitude of advantages, revolutionizing farming practices for a sustainable and prosperous future.
          </p>
        </div>

        <div className="benefits__grid">
          {benefits.map((b, i) => (
            <div key={i} className="glass-card benefits__card" style={{ '--b-color': b.color }}>
              <div className="benefits__card-top">
                <div className="benefits__icon" style={{ background: `${b.color}18` }}>{b.icon}</div>
                <div className="benefits__stat">
                  <div className="benefits__stat-num" style={{ color: b.color }}>{b.stat}</div>
                  <div className="benefits__stat-lbl">{b.statLabel}</div>
                </div>
              </div>
              <h3 className="benefits__title">{b.title}</h3>
              <p className="benefits__desc">{b.desc}</p>
              <div className="benefits__bar">
                <div className="benefits__bar-fill" style={{ background: b.color }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary callout */}
        <div className="benefits__callout">
          <div className="benefits__callout-glow"></div>
          <div className="benefits__callout-content">
            <span className="benefits__callout-icon">🚀</span>
            <div>
              <h3>A More Resilient, Productive & Eco-Friendly Ecosystem</h3>
              <p>
                These benefits combine to create a modern agricultural ecosystem that addresses the challenges of modern farming head-on, enabling farmers to thrive while protecting the environment for future generations.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
