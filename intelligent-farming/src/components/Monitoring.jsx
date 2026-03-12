import { useState } from 'react';
import './Monitoring.css';

// Architecture data from the PDF
const architecture = [
  {
    id: 'sensors',
    icon: '📡',
    label: 'Sensors & Drones',
    desc: 'Collect field data and imagery',
    color: '#4ade80',
    details: [
      'Soil moisture sensors (±2% accuracy)',
      'pH and EC sensors',
      'Temperature/humidity arrays',
      'HD camera drones for aerial imaging',
      'Multispectral imaging for crop health',
      'Weather monitoring stations',
    ]
  },
  {
    id: 'gateway',
    icon: '🔌',
    label: 'IoT Gateway',
    desc: 'Aggregate and transmit telemetry',
    color: '#60a5fa',
    details: [
      'LoRa communication protocol',
      'MQTT data transmission',
      'Edge computing & pre-processing',
      'Offline buffering capability',
      'Encrypted data transmission',
      'Multi-protocol support',
    ]
  },
  {
    id: 'ml',
    icon: '🧠',
    label: 'AI / ML Module',
    desc: 'Analyze data and generate insights',
    color: '#a78bfa',
    details: [
      'Crop disease classification (CNN)',
      'Yield prediction models',
      'Pest risk scoring',
      'Irrigation optimization algorithms',
      'Weather pattern learning',
      'Anomaly detection system',
    ]
  },
  {
    id: 'cloud',
    icon: '☁️',
    label: 'Cloud Dashboard',
    desc: 'Store, visualize, and route data',
    color: '#2dd4bf',
    details: [
      'Real-time monitoring dashboard',
      'Historical data analytics',
      'Multi-farm management',
      'Mobile app integration',
      'API for third-party tools',
      'Automated reporting system',
    ]
  },
  {
    id: 'actuators',
    icon: '⚙️',
    label: 'Actuators & Irrigation',
    desc: 'Execute control commands on farm',
    color: '#fbbf24',
    details: [
      'Automated irrigation valves',
      'Greenhouse cooling/heating fans',
      'Fertigation pump control',
      'Drone spray system triggers',
      'CO₂ enrichment actuators',
      'LED grow light scheduling',
    ]
  },
];

const components = [
  {
    icon: '🌡️',
    title: 'IoT Sensors',
    desc: 'Precision sensors for soil moisture, pH, and temperature deployed throughout the farm.',
    features: ['Real-time continuous monitoring', '± 2% measurement precision', 'Battery-powered wireless nodes', 'Self-calibrating algorithms'],
  },
  {
    icon: '🤖',
    title: 'Actuators',
    desc: 'Automated valves, fans, and pumps for environmental control responding to sensor data.',
    features: ['Instant response (<100ms)', 'Manual override capability', 'Fail-safe shutdown modes', 'Energy-efficient operation'],
  },
  {
    icon: '🚁',
    title: 'Cameras & Drones',
    desc: 'High-resolution imaging for comprehensive field surveillance and crop health assessment.',
    features: ['4K aerial imaging', 'Multispectral NDVI analysis', 'Autonomous flight paths', 'Real-time video streaming'],
  },
  {
    icon: '💻',
    title: 'Software Platform',
    desc: 'Integrated dashboard, mobile app, and AI for seamless smart farm management.',
    features: ['Web & mobile dashboard', 'AI-powered recommendations', 'Multi-language support', 'Offline mode capability'],
  },
];

export default function Monitoring() {
  const [activeNode, setActiveNode] = useState(null);
  const [activeComponent, setActiveComponent] = useState(0);

  const selectedNode = architecture.find(n => n.id === activeNode);

  const toggleNode = (id) => {
    setActiveNode(prev => (prev === id ? null : id));
  };

  return (
    <section className="section monitoring" id="monitoring">
      <div className="container">

        <div className="monitoring__header">
          <div className="section-label">
            <span></span>
            <p>System Architecture</p>
          </div>
          <h2 className="section-title">Agro-Smart Architecture</h2>
          <p className="section-subtitle">
            A cohesive technology stack integrating diverse components to create an intelligent, seamless farming system with end-to-end data flow and control.
          </p>
          <p className="monitoring__arch-hint">Click any component to explore its details ↓</p>
        </div>

        {/* Architecture Diagram */}
        <div className="monitoring__arch">
          {architecture.map((node, i) => (
            <div key={node.id} className="monitoring__arch-wrapper">
              <button
                className={`monitoring__arch-node glass-card
                  ${activeNode === node.id ? 'monitoring__arch-node--active' : ''}
                  ${i === 0 ? 'monitoring__arch-node--first' : ''}
                  ${i === architecture.length - 1 ? 'monitoring__arch-node--last' : ''}`}
                style={{ '--node-color': node.color }}
                onClick={() => toggleNode(node.id)}
                aria-expanded={activeNode === node.id}
              >
                <div className="monitoring__arch-icon">{node.icon}</div>
                <div className="monitoring__arch-label">{node.label}</div>
                <div className="monitoring__arch-desc">{node.desc}</div>
                <div
                  className={`monitoring__arch-chevron ${activeNode === node.id ? 'monitoring__arch-chevron--open' : ''}`}
                  style={{ color: node.color }}
                >
                  ▾
                </div>
              </button>
              {i < architecture.length - 1 && (
                <div className="monitoring__arch-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={architecture[i].color} strokeWidth="2" opacity="0.6">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Details panel — rendered outside the node, no overflow clipping */}
        {selectedNode && (
          <div
            className="monitoring__arch-details-panel"
            style={{ '--node-color': selectedNode.color }}
          >
            <div className="monitoring__arch-details-header">
              <span className="monitoring__arch-details-icon">{selectedNode.icon}</span>
              <div>
                <h4 style={{ color: selectedNode.color }}>{selectedNode.label}</h4>
                <p>{selectedNode.desc}</p>
              </div>
              <button
                className="monitoring__arch-details-close"
                onClick={() => setActiveNode(null)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="monitoring__arch-details-grid">
              {selectedNode.details.map((d, j) => (
                <div key={j} className="monitoring__arch-detail">
                  <div className="monitoring__arch-detail-dot" style={{ background: selectedNode.color }}></div>
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="divider"></div>

        {/* Components */}
        <div className="monitoring__components-header">
          <h3 className="section-title" style={{ fontSize: '1.8rem' }}>Key System Components</h3>
          <p className="section-subtitle" style={{ fontSize: '1rem' }}>
            Each component plays a vital role in data collection, analysis, and automated action.
          </p>
        </div>

        <div className="monitoring__components-tabs">
          {components.map((c, i) => (
            <button
              key={i}
              className={`monitoring__comp-tab ${activeComponent === i ? 'monitoring__comp-tab--active' : ''}`}
              onClick={() => setActiveComponent(i)}
            >
              {c.icon} {c.title}
            </button>
          ))}
        </div>

        <div className="glass-card monitoring__comp-content" key={activeComponent}>
          <div className="monitoring__comp-left">
            <div className="monitoring__comp-icon">{components[activeComponent].icon}</div>
            <h3>{components[activeComponent].title}</h3>
            <p>{components[activeComponent].desc}</p>
          </div>
          <div className="monitoring__comp-right">
            <h4>Key Capabilities</h4>
            {components[activeComponent].features.map((feat, i) => (
              <div key={i} className="monitoring__comp-feature">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Goals */}
        <div className="monitoring__goals">
          {[
            { icon: '⚡', title: 'Automate Key Processes', desc: 'Streamline routine farming tasks through advanced technology.', color: '#fbbf24' },
            { icon: '📈', title: 'Enhance Efficiency & Yield', desc: 'Boost productivity and maximize crop output with data-driven decisions.', color: '#4ade80' },
            { icon: '🌿', title: 'Ensure Sustainability', desc: 'Minimize environmental impact through optimized resource management.', color: '#34d399' },
            { icon: '🙌', title: 'Reduce Manual Effort', desc: 'Free up human resources for more critical tasks, excluding sowing and harvesting.', color: '#60a5fa' },
          ].map((goal, i) => (
            <div key={i} className="glass-card monitoring__goal">
              <div className="monitoring__goal-icon" style={{ background: `${goal.color}22`, color: goal.color }}>{goal.icon}</div>
              <h4 style={{ color: goal.color }}>{goal.title}</h4>
              <p>{goal.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
