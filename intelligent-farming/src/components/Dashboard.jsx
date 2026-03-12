import { useState, useEffect, useCallback } from 'react';
import './Dashboard.css';

// Generate realistic simulated sensor data
function randomBetween(min, max, decimals = 1) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(decimals));
}

function generateSensorData() {
  return {
    soilMoisture: randomBetween(40, 75),
    soilPH: randomBetween(5.8, 7.2),
    temperature: randomBetween(22, 38),
    humidity: randomBetween(45, 85),
    lightIntensity: randomBetween(30, 100),
    co2Level: randomBetween(380, 520),
    nitrogenLevel: randomBetween(60, 90),
    pestRisk: randomBetween(5, 40),
    waterUsage: randomBetween(80, 200),
    yieldForecast: randomBetween(82, 96),
  };
}

function generateAlerts() {
  const possible = [
    { type: 'warning', message: 'Soil moisture low in Zone B - Irrigation scheduled', time: '2 min ago' },
    { type: 'success', message: 'Irrigation completed in Zone A - Optimal moisture reached', time: '15 min ago' },
    { type: 'info', message: 'AI Pest Scan complete - Low risk detected in North Field', time: '1 hr ago' },
    { type: 'warning', message: 'Temperature spike in Greenhouse 2 - Cooling engaged', time: '3 hr ago' },
    { type: 'success', message: 'Fertigation cycle completed - Nutrients delivered', time: '5 hr ago' },
    { type: 'info', message: 'Weekly soil pH report ready - Average pH 6.4', time: '1 day ago' },
  ];
  return possible;
}

const zones = [
  { id: 'A', name: 'Zone A - Rice Paddy', status: 'optimal', moisture: 68, irrigation: 'ON' },
  { id: 'B', name: 'Zone B - Wheat Field', status: 'warning', moisture: 42, irrigation: 'SCHEDULED' },
  { id: 'C', name: 'Zone C - Greenhouse', status: 'optimal', moisture: 72, irrigation: 'OFF' },
  { id: 'D', name: 'Zone D - Vegetable Plots', status: 'optimal', moisture: 61, irrigation: 'OFF' },
];

function GaugeChart({ value, min = 0, max = 100, color = '#22c55e', label, unit }) {
  const percentage = ((value - min) / (max - min)) * 100;
  const angle = (percentage / 100) * 180 - 90;

  return (
    <div className="gauge">
      <svg viewBox="0 0 120 70" className="gauge__svg">
        {/* Background arc */}
        <path d="M 10 65 A 50 50 0 0 1 110 65" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="10" strokeLinecap="round"/>
        {/* Value arc */}
        <path
          d="M 10 65 A 50 50 0 0 1 110 65"
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={`${percentage * 1.57} 157`}
          opacity="0.85"
        />
        {/* Needle */}
        <line
          x1="60" y1="65"
          x2={60 + 35 * Math.cos((angle * Math.PI) / 180)}
          y2={65 + 35 * Math.sin((angle * Math.PI) / 180)}
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="60" cy="65" r="4" fill={color}/>
      </svg>
      <div className="gauge__value" style={{ color }}>{value}{unit}</div>
      <div className="gauge__label">{label}</div>
    </div>
  );
}

function SparkLine({ data, color = '#22c55e' }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const width = 80;
  const height = 30;

  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((d - min) / range) * height;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="30" preserveAspectRatio="none">
      <polyline points={points} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
    </svg>
  );
}

export default function Dashboard() {
  const [data, setData] = useState(generateSensorData());
  const [alerts] = useState(generateAlerts());
  const [history, setHistory] = useState({ temp: [28, 29, 31, 33, 30, 28, 27], moisture: [60, 58, 55, 62, 65, 68, 70] });
  const [irrigationZones, setIrrigationZones] = useState(zones);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [autoRefresh, setAutoRefresh] = useState(true);

  const refresh = useCallback(() => {
    setData(generateSensorData());
    setLastUpdate(new Date());
    setHistory(prev => ({
      temp: [...prev.temp.slice(1), randomBetween(24, 38)],
      moisture: [...prev.moisture.slice(1), randomBetween(42, 80)],
    }));
  }, []);

  useEffect(() => {
    if (!autoRefresh) return;
    const interval = setInterval(refresh, 4000);
    return () => clearInterval(interval);
  }, [autoRefresh, refresh]);

  const toggleIrrigation = (zoneId) => {
    setIrrigationZones(prev =>
      prev.map(z =>
        z.id === zoneId
          ? { ...z, irrigation: z.irrigation === 'ON' ? 'OFF' : 'ON', status: z.irrigation === 'ON' ? 'warning' : 'optimal' }
          : z
      )
    );
  };

  return (
    <section className="section dashboard" id="dashboard">
      <div className="container">

        <div className="dashboard__header">
          <div>
            <div className="section-label">
              <span></span>
              <p>Live Dashboard</p>
            </div>
            <h2 className="section-title">Real-Time Farm Monitor</h2>
          </div>
          <div className="dashboard__controls">
            <div className="dashboard__live-badge">
              <div className="dashboard__live-dot"></div>
              <span>LIVE</span>
            </div>
            <button
              className={`btn ${autoRefresh ? 'btn-primary' : 'btn-secondary'} dashboard__refresh-btn`}
              onClick={() => setAutoRefresh(v => !v)}
            >
              {autoRefresh ? '⏸ Pause' : '▶ Resume'}
            </button>
            <button className="btn btn-secondary dashboard__refresh-btn" onClick={refresh}>
              🔄 Refresh
            </button>
          </div>
        </div>

        <div className="dashboard__timestamp">
          Last updated: {lastUpdate.toLocaleTimeString()} &nbsp;|&nbsp; Auto-refresh: {autoRefresh ? 'ON' : 'OFF'}
        </div>

        {/* Gauges Row */}
        <div className="dashboard__gauges">
          <div className="glass-card dashboard__gauge-card">
            <GaugeChart value={data.soilMoisture} label="Soil Moisture" unit="%" color="#22c55e"/>
          </div>
          <div className="glass-card dashboard__gauge-card">
            <GaugeChart value={data.soilPH} min={4} max={9} label="Soil pH" unit="" color="#60a5fa"/>
          </div>
          <div className="glass-card dashboard__gauge-card">
            <GaugeChart value={data.temperature} min={0} max={50} label="Temperature" unit="°C" color="#f59e0b"/>
          </div>
          <div className="glass-card dashboard__gauge-card">
            <GaugeChart value={data.humidity} label="Humidity" unit="%" color="#2dd4bf"/>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="dashboard__stats-grid">

          {/* Sensor Stats */}
          <div className="glass-card dashboard__stats-card">
            <h3 className="dashboard__card-title">📡 Sensor Readings</h3>
            <div className="dashboard__sensor-list">
              {[
                { label: 'Light Intensity', value: `${data.lightIntensity}%`, color: '#fbbf24', icon: '☀️' },
                { label: 'CO₂ Level', value: `${data.co2Level} ppm`, color: '#a78bfa', icon: '💨' },
                { label: 'Nitrogen Level', value: `${data.nitrogenLevel}%`, color: '#4ade80', icon: '🌿' },
                { label: 'Pest Risk Index', value: `${data.pestRisk}%`, color: data.pestRisk > 30 ? '#f87171' : '#86efac', icon: '🔬' },
                { label: 'Water Usage', value: `${data.waterUsage} L/hr`, color: '#60a5fa', icon: '💧' },
                { label: 'Yield Forecast', value: `${data.yieldForecast}%`, color: '#34d399', icon: '📈' },
              ].map((s, i) => (
                <div key={i} className="dashboard__sensor-row">
                  <span className="dashboard__sensor-icon">{s.icon}</span>
                  <span className="dashboard__sensor-label">{s.label}</span>
                  <div className="dashboard__sensor-bar-wrap">
                    <div className="dashboard__sensor-bar">
                      <div className="dashboard__sensor-bar-fill" style={{ width: `${Math.min(100, parseFloat(s.value))}%`, background: s.color }}></div>
                    </div>
                  </div>
                  <span className="dashboard__sensor-value" style={{ color: s.color }}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trend Charts */}
          <div className="glass-card dashboard__stats-card">
            <h3 className="dashboard__card-title">📊 Trend Analysis</h3>
            <div className="dashboard__trends">
              <div className="dashboard__trend">
                <div className="dashboard__trend-header">
                  <span className="dashboard__trend-label">Temperature Trend</span>
                  <span className="dashboard__trend-value" style={{ color: '#f59e0b' }}>{data.temperature}°C</span>
                </div>
                <SparkLine data={history.temp} color="#f59e0b"/>
                <div className="dashboard__trend-footer">
                  <span style={{ color: data.temperature > 32 ? '#f87171' : '#4ade80' }}>
                    {data.temperature > 32 ? '⚠ Above optimal' : '✓ In optimal range'}
                  </span>
                </div>
              </div>
              <div className="dashboard__trend-divider"></div>
              <div className="dashboard__trend">
                <div className="dashboard__trend-header">
                  <span className="dashboard__trend-label">Soil Moisture Trend</span>
                  <span className="dashboard__trend-value" style={{ color: '#22c55e' }}>{data.soilMoisture}%</span>
                </div>
                <SparkLine data={history.moisture} color="#22c55e"/>
                <div className="dashboard__trend-footer">
                  <span style={{ color: data.soilMoisture < 50 ? '#fbbf24' : '#4ade80' }}>
                    {data.soilMoisture < 50 ? '⚠ Consider irrigation' : '✓ Moisture optimal'}
                  </span>
                </div>
              </div>

              {/* Health Score */}
              <div className="dashboard__health">
                <div className="dashboard__health-label">Overall Farm Health Score</div>
                <div className="dashboard__health-bar">
                  <div className="dashboard__health-fill" style={{ width: `${data.yieldForecast}%` }}></div>
                </div>
                <div className="dashboard__health-value">{data.yieldForecast}%</div>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="glass-card dashboard__stats-card">
            <h3 className="dashboard__card-title">🔔 System Alerts</h3>
            <div className="dashboard__alerts">
              {alerts.map((alert, i) => (
                <div key={i} className={`dashboard__alert dashboard__alert--${alert.type}`}>
                  <div className={`dashboard__alert-icon dashboard__alert-icon--${alert.type}`}>
                    {alert.type === 'warning' ? '⚠' : alert.type === 'success' ? '✓' : 'ℹ'}
                  </div>
                  <div className="dashboard__alert-content">
                    <p>{alert.message}</p>
                    <span>{alert.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Irrigation Zones */}
        <div className="glass-card dashboard__zones">
          <h3 className="dashboard__card-title">💧 Irrigation Zone Control</h3>
          <div className="dashboard__zones-grid">
            {irrigationZones.map(zone => (
              <div key={zone.id} className={`dashboard__zone dashboard__zone--${zone.status}`}>
                <div className="dashboard__zone-id">{zone.id}</div>
                <div className="dashboard__zone-info">
                  <div className="dashboard__zone-name">{zone.name}</div>
                  <div className="dashboard__zone-moisture">💧 Moisture: {zone.moisture}%</div>
                  <div className="dashboard__zone-bar">
                    <div className="dashboard__zone-bar-fill" style={{ width: `${zone.moisture}%` }}></div>
                  </div>
                </div>
                <div className="dashboard__zone-controls">
                  <div className={`dashboard__zone-status dashboard__zone-status--${zone.status}`}>
                    {zone.status === 'optimal' ? '● Optimal' : '⚠ Low'}
                  </div>
                  <button
                    className={`dashboard__zone-btn ${zone.irrigation === 'ON' ? 'dashboard__zone-btn--on' : ''}`}
                    onClick={() => toggleIrrigation(zone.id)}
                  >
                    {zone.irrigation}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
