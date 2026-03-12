import './Market.css';

const marketData = [
  {
    label: 'Precision Ag CAGR',
    value: '9.7%',
    desc: 'Projected Compound Annual Growth Rate for India\'s Precision Agriculture market (2024–2033).',
    icon: '🎯',
    color: '#4ade80',
  },
  {
    label: 'Smart Ag CAGR',
    value: '20.5%',
    desc: 'Projected Compound Annual Growth Rate for India\'s Smart Agriculture market (2024–2033).',
    icon: '🚀',
    color: '#60a5fa',
  },
  {
    label: 'Precision Ag 2024',
    value: '$304.6M',
    desc: 'India\'s precision agriculture market size in 2024 (IMARC Group).',
    icon: '📊',
    color: '#fbbf24',
  },
  {
    label: 'Precision Ag 2033',
    value: '$700.9M',
    desc: 'Projected precision agriculture market size by 2033.',
    icon: '📈',
    color: '#34d399',
  },
  {
    label: 'Smart Ag 2024',
    value: '$714.1M',
    desc: 'India\'s smart agriculture market size in 2024.',
    icon: '🌐',
    color: '#a78bfa',
  },
  {
    label: 'Smart Ag 2033',
    value: '$3.84B',
    desc: 'Projected smart agriculture market size by 2033.',
    icon: '💰',
    color: '#2dd4bf',
  },
];

const futureSteps = [
  {
    num: '01',
    icon: '🔬',
    title: 'Continuous Innovation',
    desc: 'Ongoing research and development to integrate emerging technologies like advanced robotics and quantum sensing.',
    color: '#4ade80',
  },
  {
    num: '02',
    icon: '🌍',
    title: 'Global Expansion',
    desc: 'Pilot programs and partnerships in diverse agricultural regions to adapt Agro-Smart to various climates and crop types.',
    color: '#60a5fa',
  },
  {
    num: '03',
    icon: '🎓',
    title: 'Community & Education',
    desc: 'Developing training programs for farmers and agricultural professionals to foster adoption and maximize impact.',
    color: '#a78bfa',
  },
];

const references = [
  {
    title: 'IMARC Group: India Precision Agriculture Market',
    desc: 'Projects India\'s precision agriculture market to grow from ~$304.60M in 2024 to ~$700.87M by 2033 (Size, Share, Trends and Forecast 2025-2033).',
  },
  {
    title: 'IMARC Group: India Smart Agriculture Market Report',
    desc: 'Indicates the broader smart agriculture market will grow from ~$714.1M in 2024 to ~$3,837.6M by 2033 (2025-2033).',
  },
  {
    title: 'IJERT: IoT-Based Smart Farming Systems',
    desc: '"A Survey on IoT-Based Smart Farming Systems for Automated Irrigation and Real-Time Soil Monitoring" by Lalit Sen et al. (Vol. 13, Issue 06 – July 2025).',
  },
  {
    title: 'IJRASET: Sensor Based Smart Farming (Fenugreek)',
    desc: 'Insights into real-world implementation of sensors, soil moisture monitoring, and automated irrigation in Indian agriculture (2024).',
  },
  {
    title: 'arXiv: LoRa Communication for Agriculture 4.0',
    desc: 'Key reference for communication technology stack, wireless methods, long-range capabilities, and energy efficiency (2024).',
  },
];

export default function Market() {
  return (
    <section className="section market" id="market">
      <div className="container">

        {/* Market Size */}
        <div className="market__header">
          <div className="section-label">
            <span></span>
            <p>Market Opportunity</p>
          </div>
          <h2 className="section-title">Current Market Landscape</h2>
          <p className="section-subtitle">
            The Indian agricultural technology market is experiencing significant growth, driven by the increasing adoption of precision and smart farming solutions.
          </p>
        </div>

        <div className="market__stats">
          {marketData.map((item, i) => (
            <div key={i} className="glass-card market__stat-card" style={{ '--card-color': item.color }}>
              <div className="market__stat-icon">{item.icon}</div>
              <div className="market__stat-value" style={{ color: item.color }}>{item.value}</div>
              <div className="market__stat-label">{item.label}</div>
              <div className="market__stat-desc">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Market Context */}
        <div className="glass-card market__context">
          <div className="market__context-icon">🌏</div>
          <div className="market__context-content">
            <h3>Global Agricultural Transformation</h3>
            <p>
              The global agricultural sector is undergoing rapid transformation, with technological adoption accelerating due to rising food demand, climate change impacts, and the urgent need for sustainable practices. India is at the forefront of this smart farming revolution.
            </p>
          </div>
        </div>

        <div className="divider"></div>

        {/* Future Outlook */}
        <div className="market__header">
          <div className="section-label">
            <span></span>
            <p>Future Outlook</p>
          </div>
          <h2 className="section-title">Next Steps & Vision</h2>
          <p className="section-subtitle">
            Agro-Smart is not just a solution for today but a foundation for the future of agriculture. Our vision extends beyond current capabilities.
          </p>
        </div>

        <div className="market__future-badges">
          <div className="market__future-badge">
            <span>🌟</span>
            <div>
              <strong>Future-Ready</strong>
              <p>Built for long-term agricultural growth</p>
            </div>
          </div>
          <div className="market__future-badge">
            <span>🏗️</span>
            <div>
              <strong>Smart Foundation</strong>
              <p>Core platform for sustainable innovation</p>
            </div>
          </div>
          <div className="market__future-badge">
            <span>🔭</span>
            <div>
              <strong>Visionary</strong>
              <p>Extends beyond current capabilities</p>
            </div>
          </div>
        </div>

        <div className="market__future">
          {futureSteps.map((step, i) => (
            <div key={i} className="glass-card market__future-card">
              <div className="market__future-num" style={{ color: step.color }}>{step.num}</div>
              <div className="market__future-icon">{step.icon}</div>
              <h3 style={{ color: step.color }}>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="divider"></div>

        {/* References */}
        <div className="market__refs">
          <h3>References & Sources</h3>
          <div className="market__refs-list">
            {references.map((ref, i) => (
              <div key={i} className="market__ref">
                <div className="market__ref-num">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <div className="market__ref-title">{ref.title}</div>
                  <div className="market__ref-desc">{ref.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
