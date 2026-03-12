import { useState, useEffect, useRef } from 'react';
import './ROI.css';

const costData = {
  initial: { label: 'Initial Setup (5 ha)', value: 5750, display: '$5,500 – $6,000', icon: '🏗️' },
  annual: { label: 'Annual Operating Cost', value: 1150, display: '$800 – $1,500', icon: '🔧' },
};

const included = [
  'IoT sensor network installation',
  'AI/ML software platform license',
  'Cloud connectivity & storage',
  'Mobile app for farm management',
  'Initial training & onboarding',
  'Technical support (1st year)',
];

const excluded = [
  'Drone hardware (optional add-on)',
  'Additional expansion zones',
  'Premium analytics modules',
  'Physical infrastructure upgrades',
];

const benefits = [
  { label: 'Increased Yield & Quality', value: 30, icon: '🌾', color: '#4ade80' },
  { label: 'Water Usage Reduction', value: 40, icon: '💧', color: '#60a5fa' },
  { label: 'Pesticide Reduction', value: 35, icon: '🔬', color: '#a78bfa' },
  { label: 'Labor Cost Savings', value: 25, icon: '👨‍🌾', color: '#fbbf24' },
  { label: 'Energy Efficiency', value: 22, icon: '⚡', color: '#2dd4bf' },
  { label: 'Profit Increase', value: 70, icon: '📈', color: '#34d399' },
];

function AnimatedNumber({ target, duration = 1.5, prefix = '', suffix = '' }) {
  const [current, setCurrent] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const start = performance.now();
    const animate = (now) => {
      const elapsed = (now - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(target * eased));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);

  return <>{prefix}{current.toLocaleString()}{suffix}</>;
}

function BarChart({ data }) {
  const maxVal = Math.max(...data.map(d => d.value));

  return (
    <div className="bar-chart">
      {data.map((item, i) => (
        <div key={i} className="bar-chart__item">
          <div className="bar-chart__label">
            <span className="bar-chart__icon">{item.icon}</span>
            <span>{item.label}</span>
          </div>
          <div className="bar-chart__bar-wrap">
            <div className="bar-chart__bar">
              <div
                className="bar-chart__fill"
                style={{ width: `${item.value}%`, background: `linear-gradient(90deg, ${item.color}88, ${item.color})` }}
              ></div>
            </div>
            <span className="bar-chart__value" style={{ color: item.color }}>{item.value}%</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ROI() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section roi" id="roi" ref={sectionRef}>
      <div className="container">

        <div className="roi__header">
          <div className="section-label">
            <span></span>
            <p>Investment & ROI</p>
          </div>
          <h2 className="section-title">Profit Potential & Cost Estimate</h2>
          <p className="section-subtitle">
            Agro-Smart doesn't just improve efficiency — it significantly boosts your farm's financial performance with a rapid return on investment.
          </p>
        </div>

        {/* Cost Cards */}
        <div className="roi__cost-cards">
          {Object.values(costData).map((item, i) => (
            <div key={i} className="glass-card roi__cost-card">
              <div className="roi__cost-icon">{item.icon}</div>
              <div className="roi__cost-label">{item.label}</div>
              <div className="roi__cost-value">{item.display}</div>
              {i === 0 && <div className="roi__cost-note">One-time investment for system installation</div>}
              {i === 1 && <div className="roi__cost-note">Ongoing maintenance and data services</div>}
            </div>
          ))}

          {/* ROI KPIs */}
          <div className="glass-card roi__cost-card roi__cost-card--highlight">
            <div className="roi__cost-icon">🚀</div>
            <div className="roi__cost-label">Profit Increase</div>
            <div className="roi__cost-value roi__kpi">
              {animate && <AnimatedNumber target={70} suffix="%" />}
            </div>
            <div className="roi__cost-note">Boost in net profit per 5 hectares</div>
          </div>

          <div className="glass-card roi__cost-card roi__cost-card--highlight">
            <div className="roi__cost-icon">⏱️</div>
            <div className="roi__cost-label">Rapid ROI Timeframe</div>
            <div className="roi__cost-value" style={{ fontSize: '1.4rem' }}>1 Season<br/>to 1 Year</div>
            <div className="roi__cost-note">Expected return on investment</div>
          </div>
        </div>

        {/* Revenue Comparison */}
        <div className="roi__comparison">
          <div className="glass-card roi__comparison-card">
            <h3>Traditional Farming (5 ha/season)</h3>
            <div className="roi__rev-bars">
              {[
                { label: 'Revenue', value: 25000, maxVal: 35000, color: '#60a5fa' },
                { label: 'Costs', value: 15000, maxVal: 35000, color: '#f87171' },
                { label: 'Profit', value: 10000, maxVal: 35000, color: '#94a3b8' },
              ].map((item, i) => (
                <div key={i} className="roi__rev-row">
                  <span className="roi__rev-label">{item.label}</span>
                  <div className="roi__rev-bar">
                    <div
                      className="roi__rev-fill"
                      style={{
                        width: animate ? `${(item.value / item.maxVal) * 100}%` : '0',
                        background: item.color
                      }}
                    ></div>
                  </div>
                  <span className="roi__rev-value" style={{ color: item.color }}>
                    ${item.value.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="roi__comparison-arrow">
            <div className="roi__comparison-badge">
              <span>+70%</span>
              <span>Profit</span>
            </div>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>

          <div className="glass-card roi__comparison-card roi__comparison-card--smart">
            <h3>Agro-Smart Farming (5 ha/season)</h3>
            <div className="roi__rev-bars">
              {[
                { label: 'Revenue', value: 30000, maxVal: 35000, color: '#4ade80' },
                { label: 'Costs', value: 12000, maxVal: 35000, color: '#fb923c' },
                { label: 'Profit', value: 17000, maxVal: 35000, color: '#34d399' },
              ].map((item, i) => (
                <div key={i} className="roi__rev-row">
                  <span className="roi__rev-label">{item.label}</span>
                  <div className="roi__rev-bar">
                    <div
                      className="roi__rev-fill"
                      style={{
                        width: animate ? `${(item.value / item.maxVal) * 100}%` : '0',
                        background: item.color
                      }}
                    ></div>
                  </div>
                  <span className="roi__rev-value" style={{ color: item.color }}>
                    ${item.value.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Bar Chart */}
        <div className="glass-card roi__benefits">
          <h3>System Benefits Overview</h3>
          <BarChart data={benefits} />
        </div>

        {/* Included / Excluded */}
        <div className="roi__breakdown">
          <div className="glass-card roi__breakdown-card">
            <h4>✅ What's Included</h4>
            {included.map((item, i) => (
              <div key={i} className="roi__breakdown-item roi__breakdown-item--included">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="glass-card roi__breakdown-card">
            <h4>❌ What's Excluded</h4>
            {excluded.map((item, i) => (
              <div key={i} className="roi__breakdown-item roi__breakdown-item--excluded">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
