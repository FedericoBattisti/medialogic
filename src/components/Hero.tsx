import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Automazione Intelligente';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="neural-grid"></div>
        <div className="hero-glow"></div>
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}></div>
          ))}
        </div>
      </div>
      <div className="hero-content">
        <div className="ai-badge">
          <span className="pulse"></span>
          <span>AI-Powered Solutions</span>
        </div>
        <p className="hero-subtitle">Innovare, ottimizzare, evolvere</p>
        <h1 className="hero-title">
          Entra nell'era della <br />
          <span className="gradient-text">{text}</span>
          <span className="cursor">|</span>
        </h1>
        <p className="hero-description">
          Accompagnamo la tua azienda nel futuro dell'intelligenza artificiale
        </p>
        <div className="hero-buttons">
          <a href="#contatti" className="hero-cta primary">CONTATTACI</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
