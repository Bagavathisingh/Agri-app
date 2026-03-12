import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import Monitoring from './components/Monitoring';
import Benefits from './components/Benefits';
import ROI from './components/ROI';
import Market from './components/Market';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <Features />
        <Dashboard />
        <Monitoring />
        <Benefits />
        <ROI />
        <Market />
      </main>
      <Footer />
    </div>
  );
}
