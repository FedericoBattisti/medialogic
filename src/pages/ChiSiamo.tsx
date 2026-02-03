import './ChiSiamo.css';
import usePageTitle from '../hooks/usePageTitle';

const ChiSiamo = () => {
  usePageTitle('Chi Siamo');

  return (
    <main className="chi-siamo-page">
      <section className="page-hero chi-siamo-hero">
        <div className="hero-background">
          <div className="hero-grid"></div>
          <div className="hero-glow"></div>
        </div>
        <div className="page-hero-content">
          <h1 className='gradient-text'>Chi siamo</h1>
          </div>
      </section>

      <section className="about-content">
        <div className="about-container">
          <div className="mission-statement">
            <div className="mission-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p>
              <span className="highlight">Medialogic Artificial Intelligence</span> è una start-up innovativa
              nata con l'obiettivo di progettare e realizzare soluzioni grazie all'integrazione della tecnologia
              <span className="highlight"> RPA</span> (Robotic Process Automation) e dell'<span className="highlight">IA</span> (Intelligenza Artificiale),
              realizzando così servizi ad alto valore aggiunto nell'ambito della
              <span className="highlight"> Intelligent Process Automation</span> (IPA).
            </p>
          </div>

          <div className="pillars-section">
            <div className="pillar-item">
              <div className="pillar-number">01</div>
              <h3>Innovare</h3>
              <p>Siamo i pionieri dell'automazione RPA e dell'Intelligent Automation in Italia. Le nostre consulenze hanno come obiettivo quello di (ri)innovare i processi aziendali già esistenti.</p>
            </div>
            <div className="pillar-item">
              <div className="pillar-number">02</div>
              <h3>Ottimizzare</h3>
              <p>Attraverso la consulenza possiamo facilmente individuare quei processi aziendali ottimizzabili tramite l'introduzione delle nuove tecnologie.</p>
            </div>
            <div className="pillar-item">
              <div className="pillar-number">03</div>
              <h3>Evolvere</h3>
              <p>L'esperienza maturata negli anni ci consente di implementare nuove soluzioni anche su automazioni già esistenti/sviluppate da terzi.</p>
            </div>
          </div>

          <div className="certifications-section">
            <h2>Le nostre Certificazioni</h2>
            <p className="certifications-intro">
              Medialogic AI è certificata secondo i più elevati standard internazionali di qualità e sicurezza,
              garantendo ai nostri clienti servizi conformi alle migliori pratiche del settore.<br /><a href="https://workdrive.zohopublic.eu/external/c6788381d903d92c068b2c2c7d3034099488ea62588c1e52a0af8c9170e79970?layout=list" className='external-link'>(Fai click per visionare le nostre politiche.)</a>
            </p>
            <div className="certifications-grid">
              <div className="certification-card">
                <div className="cert-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3>ISO 9001:2015</h3>
                <p>Sistema di Gestione per la Qualità</p>
                <span className="cert-badge">Qualità</span>
              </div>
              <div className="certification-card">
                <div className="cert-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3>ISO/IEC 27001:2022</h3>
                <p>Sistema di Gestione per la Sicurezza delle Informazioni</p>
                <span className="cert-badge">Sicurezza</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ChiSiamo;
