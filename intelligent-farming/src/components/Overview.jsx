import './Overview.css';

const problems = [
  {
    icon: '👨‍🌾',
    title: 'Labor-Intensive Operations',
    desc: 'High demand for manual labor, often scarce and costly in rural areas.',
    color: 'amber',
  },
  {
    icon: '💧',
    title: 'Overuse of Resources',
    desc: 'Inefficient use of water, fertilizers, and pesticides leading to waste and environmental impact.',
    color: 'blue',
  },
  {
    icon: '📊',
    title: 'Lack of Real-Time Data',
    desc: 'Inability to make informed decisions due to delayed or insufficient field information.',
    color: 'purple',
  },
  {
    icon: '🌾',
    title: 'Unpredictable Yields',
    desc: 'Variability in crop output due to environmental factors and suboptimal management.',
    color: 'red',
  },
];

const solutions = [
  {
    icon: '🤖',
    step: '01',
    title: 'Sowing (Manual)',
    desc: 'Farmers retain control over sowing with the human touch essential for initial planting.',
  },
  {
    icon: '📡',
    step: '02',
    title: 'Sensor Input',
    desc: 'IoT sensors continuously collect soil, weather, and crop data from the field.',
  },
  {
    icon: '☁️',
    step: '03',
    title: 'Cloud Processing',
    desc: 'Data is transmitted to the cloud for AI/ML analysis and intelligent decision-making.',
  },
  {
    icon: '⚙️',
    step: '04',
    title: 'Automated Actions',
    desc: 'Smart actuators execute irrigation, pest control, and climate adjustments automatically.',
  },
];

export default function Overview() {
  return (
    <section className="section overview" id="overview">
      <div className="container">

        {/* Problem Statement */}
        <div className="overview__header">
          <div className="section-label">
            <span></span>
            <p>Background</p>
          </div>
          <h2 className="section-title">Challenges in Traditional Farming</h2>
          <p className="section-subtitle">
            Modern agriculture faces critical challenges that demand intelligent, technology-driven solutions to ensure food security for a growing global population.
          </p>
        </div>

        <div className="grid-4 overview__problems">
          {problems.map((p, i) => (
            <div key={i} className={`glass-card overview__problem overview__problem--${p.color}`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={`overview__problem-icon overview__problem-icon--${p.color}`}>
                <span>{p.icon}</span>
              </div>
              <h3 className="overview__problem-title">{p.title}</h3>
              <p className="overview__problem-desc">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="divider"></div>

        {/* Solution */}
        <div className="overview__header">
          <div className="section-label">
            <span></span>
            <p>Solution</p>
          </div>
          <h2 className="section-title">How Agro-Smart Works</h2>
          <p className="section-subtitle">
            A semi-automated precision farming pipeline that integrates IoT, AI/ML, and cloud processing to automate key processes while retaining essential human control.
          </p>
        </div>

        <div className="overview__pipeline">
          {solutions.map((s, i) => (
            <div key={i} className="overview__step">
              <div className="overview__step-number">{s.step}</div>
              <div className="overview__step-icon">{s.icon}</div>
              <div className="overview__step-content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              {i < solutions.length - 1 && (
                <div className="overview__step-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Need Statement */}
        <div className="overview__need">
          <div className="overview__need-content">
            <h3>The Urgent Need for Smart Farming</h3>
            <div className="grid-3 overview__need-grid">
              <div className="overview__need-item">
                <span className="overview__need-icon">🌍</span>
                <strong>Sustainable Agriculture</strong>
                <p>Increasing global pressure for environmentally friendly food production.</p>
              </div>
              <div className="overview__need-item">
                <span className="overview__need-icon">📈</span>
                <strong>Rising Food Demand</strong>
                <p>A growing population necessitates more efficient and higher-yield farming methods.</p>
              </div>
              <div className="overview__need-item">
                <span className="overview__need-icon">🏡</span>
                <strong>Rural Labor Shortages</strong>
                <p>A diminishing workforce in agricultural sectors drives the need for automation.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
