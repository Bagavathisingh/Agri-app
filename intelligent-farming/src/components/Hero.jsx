import { useEffect, useState } from 'react';
import './Hero.css';

const stats = [
  { value: '70%', label: 'Profit Increase' },
  { value: '40%', label: 'Water Saved' },
  { value: '1 Season', label: 'Rapid ROI' },
  { value: '24/7', label: 'Real-time Monitor' },
];

const typedWords = ['Smarter', 'Greener', 'Efficient', 'Automated', 'Precise'];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = typedWords[wordIndex];
    let timeout;

    if (!isDeleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length - 1)), 50);
    } else if (!isDeleting && displayed.length === word.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % typedWords.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex]);

  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      {/* Background Elements */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1"></div>
        <div className="hero__orb hero__orb--2"></div>
        <div className="hero__orb hero__orb--3"></div>
        <div className="hero__grid"></div>
      </div>

      <div className="container hero__container">
        {/* Badge */}
        <div className="hero__badge animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="hero__badge-dot"></span>
          <span>Semi-Automated Smart Farming System</span>
        </div>

        {/* Headline */}
        <h1 className="hero__title animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Farm{' '}
          <span className="hero__title-typed">
            {displayed}
            <span className="hero__cursor">|</span>
          </span>
          <br />
          with{' '}
          <span className="hero__title-gradient">Intelligent Farming</span>
        </h1>

        <p className="hero__subtitle animate-fade-up" style={{ animationDelay: '0.3s' }}>
          A modern precision agriculture platform powered by{' '}
          <strong>IoT sensors</strong>, <strong>AI/ML analytics</strong>, and{' '}
          <strong>automated actuators</strong> — transforming traditional
          farming into a data-driven, sustainable operation.
        </p>

        {/* CTAs */}
        <div className="hero__actions animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <button className="btn btn-primary hero__btn" onClick={() => scrollToSection('#dashboard')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
            Live Dashboard
          </button>
          <button className="btn btn-secondary hero__btn" onClick={() => scrollToSection('#overview')}>
            Explore System
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Stats Row */}
        <div className="hero__stats animate-fade-up" style={{ animationDelay: '0.5s' }}>
          {stats.map((stat, i) => (
            <div key={i} className="hero__stat">
              <div className="hero__stat-value">{stat.value}</div>
              <div className="hero__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="hero__scroll" onClick={() => scrollToSection('#overview')}>
          <div className="hero__scroll-mouse">
            <div className="hero__scroll-wheel"></div>
          </div>
          <span>Scroll to explore</span>
        </div>
      </div>

      {/* Floating chips */}
      <div className="hero__chips" aria-hidden="true">
        {['IoT Sensors', 'AI/ML', 'Smart Irrigation', 'Pest Control', 'Climate Control', 'Real-time Data'].map((chip, i) => (
          <div key={i} className={`hero__chip hero__chip--${i}`}>{chip}</div>
        ))}
      </div>
    </section>
  );
}
