import { useState } from 'react';
import './Features.css';

const features = [
  {
    id: 'soil',
    icon: '🌱',
    label: 'Soil & Crop',
    title: 'Soil & Crop Monitoring',
    subtitle: 'IoT-Based Precision Monitoring',
    desc: 'Advanced IoT sensors continuously monitor soil conditions and crop health, providing real-time data for informed decision-making.',
    capabilities: [
      'Soil moisture levels (±2% accuracy)',
      'Soil pH and nutrient analysis',
      'Temperature & humidity monitoring',
      'Crop health detection with computer vision',
      'Disease and stress detection via AI',
      'Root zone moisture profiling',
    ],
    metrics: [
      { label: 'Sensors Deployed', value: '48+' },
      { label: 'Data Points/Hour', value: '1200' },
      { label: 'Accuracy', value: '94%' },
    ],
    color: 'green',
    gradient: 'linear-gradient(135deg, #22c55e, #10b981)',
  },
  {
    id: 'irrigation',
    icon: '💧',
    label: 'Smart Irrigation',
    title: 'Smart Irrigation & Fertigation',
    subtitle: 'Automated & Optimized Water Management',
    desc: 'Intelligent irrigation systems automatically deliver the right amount of water and nutrients at the right time, reducing waste substantially.',
    capabilities: [
      'AI-driven irrigation scheduling',
      'Drip and micro-irrigation control',
      'Weather-adaptive watering plans',
      'Fertigation integration (nutrients via water)',
      'Leak detection and valve automation',
      'Water usage analytics & reporting',
    ],
    metrics: [
      { label: 'Water Saved', value: '40%' },
      { label: 'Nutrient Efficiency', value: '60%' },
      { label: 'Zones Controlled', value: '24' },
    ],
    color: 'blue',
    gradient: 'linear-gradient(135deg, #3b82f6, #2dd4bf)',
  },
  {
    id: 'pest',
    icon: '🔬',
    label: 'Pest Control',
    title: 'Pest & Weed Control',
    subtitle: 'Targeted Detection & Robotic Management',
    desc: 'AI-powered pest detection and robotic weed management systems minimize chemical usage while protecting crop yield.',
    capabilities: [
      'Drone aerial surveillance for pest mapping',
      'Computer vision pest identification',
      'Targeted precision spraying (GPS-guided)',
      'Robotic mechanical weed removal',
      'Pesticide reduction by smart application',
      'Integrated pest management (IPM) protocols',
    ],
    metrics: [
      { label: 'Pesticide Reduction', value: '35%' },
      { label: 'Detection Accuracy', value: '91%' },
      { label: 'Drone Coverage', value: '5 ha/hr' },
    ],
    color: 'amber',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
  },
  {
    id: 'climate',
    icon: '🌡️',
    label: 'Climate Control',
    title: 'Climate & Greenhouse Automation',
    subtitle: 'Precision Environmental Control',
    desc: 'Agro-Smart\'s climate control ensures optimal growing conditions within greenhouses through an integrated network of sensors and actuators.',
    capabilities: [
      'Temperature & humidity regulation',
      'CO₂ enrichment management',
      'Automated ventilation control',
      'Supplementary LED lighting scheduling',
      'Misting and cooling system automation',
      'Energy usage optimization',
    ],
    metrics: [
      { label: 'Yield Improvement', value: '28%' },
      { label: 'Energy Savings', value: '22%' },
      { label: 'Uptime', value: '99.7%' },
    ],
    color: 'teal',
    gradient: 'linear-gradient(135deg, #14b8a6, #0ea5e9)',
  },
];

export default function Features() {
  const [active, setActive] = useState('soil');
  const activeFeature = features.find(f => f.id === active);

  return (
    <section className="section features" id="features">
      <div className="container">

        <div className="features__header">
          <div className="section-label">
            <span></span>
            <p>Core Features</p>
          </div>
          <h2 className="section-title">Intelligent Farming Capabilities</h2>
          <p className="section-subtitle">
            Our comprehensive system integrates four core functional areas to deliver a complete precision agriculture solution.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="features__tabs">
          {features.map(f => (
            <button
              key={f.id}
              className={`features__tab ${active === f.id ? `features__tab--active features__tab--${f.color}` : ''}`}
              onClick={() => setActive(f.id)}
            >
              <span className="features__tab-icon">{f.icon}</span>
              <span>{f.label}</span>
            </button>
          ))}
        </div>

        {/* Feature Content */}
        <div className="features__content" key={active}>
          <div className="features__content-left">
            <div className={`features__feature-badge features__feature-badge--${activeFeature.color}`}>
              <span>{activeFeature.icon}</span>
              {activeFeature.subtitle}
            </div>
            <h3 className="features__feature-title">{activeFeature.title}</h3>
            <p className="features__feature-desc">{activeFeature.desc}</p>

            {/* Capabilities */}
            <div className="features__capabilities">
              {activeFeature.capabilities.map((cap, i) => (
                <div key={i} className="features__capability">
                  <div className={`features__capability-dot features__capability-dot--${activeFeature.color}`}></div>
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="features__content-right">
            {/* Metrics */}
            <div className="features__metrics">
              {activeFeature.metrics.map((m, i) => (
                <div key={i} className={`features__metric features__metric--${activeFeature.color}`}>
                  <div className="features__metric-value">{m.value}</div>
                  <div className="features__metric-label">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Visual Card */}
            <div className={`features__visual features__visual--${activeFeature.color}`}>
              <div className="features__visual-icon">{activeFeature.icon}</div>
              <div className="features__visual-rings">
                <div className="ring ring--1"></div>
                <div className="ring ring--2"></div>
                <div className="ring ring--3"></div>
              </div>
              <div className="features__visual-dots">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`features__visual-dot features__visual-dot--${i}`}></div>
                ))}
              </div>
            </div>

            {/* Architecture note */}
            <div className="features__arch">
              <div className="features__arch-row">
                <div className="features__arch-item">
                  <span>📡 IoT Gateway</span>
                  <div className="features__arch-bar">
                    <div className={`features__arch-bar-fill features__arch-bar-fill--${activeFeature.color}`} style={{width:'85%'}}></div>
                  </div>
                </div>
                <div className="features__arch-item">
                  <span>🧠 AI/ML Module</span>
                  <div className="features__arch-bar">
                    <div className={`features__arch-bar-fill features__arch-bar-fill--${activeFeature.color}`} style={{width:'72%'}}></div>
                  </div>
                </div>
                <div className="features__arch-item">
                  <span>☁️ Cloud Dashboard</span>
                  <div className="features__arch-bar">
                    <div className={`features__arch-bar-fill features__arch-bar-fill--${activeFeature.color}`} style={{width:'90%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
