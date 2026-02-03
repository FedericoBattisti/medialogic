import './CosaFacciamo.css';
import usePageTitle from '../hooks/usePageTitle';

const CosaFacciamo = () => {
  usePageTitle('Cosa Facciamo');
  
  return (
    <main className="cosa-facciamo-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className='gradient-text'>Cosa Facciamo</h1>
          <p className="page-subtitle">Un mondo di servizi personalizzati sulle tue reali esigenze</p>
        </div>
      </section>

      <section className="cosa-facciamo-content">
        <div className="cosa-facciamo-container">
          <div className="intro-section">
            <h2>Sviluppo <span className="gradient-text">nuovi processi</span></h2>
            <p>
              Per poter raggiungere gli obiettivi dei propri Clienti, la Medialogic Artificial Intelligence 
              utilizza le principali piattaforme presenti sul mercato oltre ad aver sviluppato delle 
              soluzioni interne frutto dell'esperienza del suo Team.
            </p>
          </div>

          <div className="services-detailed">
            <div className="service-block" style={{ '--accent': '#00d4ff' } as React.CSSProperties}>
              <div className="service-icon-large">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="service-content">
                <h3>Consulenza</h3>
                <ul className="service-list-detailed">
                  <li>Introduzione della Digital Transformation e Digital Automation nella tua azienda</li>
                  <li>Discovery Pure Tech: identificazione di opportunità di automazione e applicazione di AI e supporto sulle tecnologie più recenti</li>
                  <li>Analisi e sviluppo di Business Case personalizzati</li>
                  <li>Process Mining: analisi dei processi di business basati sui log degli eventi</li>
                  <li>Ottimizzazione ed evoluzione delle automazioni già esistenti</li>
                </ul>
              </div>
            </div>

            <div className="service-block" style={{ '--accent': '#7c3aed' } as React.CSSProperties}>
              <div className="service-icon-large">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="service-content">
                <h3>Sviluppo</h3>
                <ul className="service-list-detailed">
                  <li>Attività di sviluppo su nuovi processi e processi già esistenti</li>
                  <li>Possibilità di scegliere la tecnologia più adatta alla tua azienda</li>
                  <li>Attività di migrazione da un RPA tool ad un altro</li>
                </ul>
              </div>
            </div>

            <div className="service-block" style={{ '--accent': '#f97316' } as React.CSSProperties}>
              <div className="service-icon-large">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="service-content">
                <h3>AI</h3>
                <ul className="service-list-detailed">
                  <li>Strategia e introduzione AI nelle aziende</li>
                  <li>Soluzioni personalizzate di AI predittivo e generativo</li>
                  <li>Utilizzo pipeline di NLP per estrazioni di dati da documenti</li>
                  <li>Training e Prompting di soluzioni proprietarie</li>
                  <li>Supporto e attivazione soluzioni Generative di mercato</li>
                </ul>
              </div>
            </div>

            <div className="service-block" style={{ '--accent': '#10b981' } as React.CSSProperties}>
              <div className="service-icon-large">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <div className="service-content">
                <h3>Control/Evolution Room</h3>
                <ul className="service-list-detailed">
                  <li>Monitoraggio costante dei processi automatizzati</li>
                  <li>Assistenza clienti personalizzata</li>
                  <li>Presa in carico di attività di sviluppo adattive ed evolutive</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="control-room-section">
            <h2>Le funzioni principali di una <span className="gradient-text">Control Room RPA</span></h2>
            <div className="control-room-grid">
              <div className="control-item">
                <div className="control-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4>Monitoraggio</h4>
                <p>Supervisione in tempo reale dello stato dei robot e delle esecuzioni</p>
              </div>
              <div className="control-item">
                <div className="control-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4>Scheduling</h4>
                <p>Pianificazione e orchestrazione delle esecuzioni automatizzate</p>
              </div>
              <div className="control-item">
                <div className="control-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h4>Gestione Eccezioni</h4>
                <p>Sistema di alerting per gestione proattiva delle anomalie</p>
              </div>
              <div className="control-item">
                <div className="control-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4>Reporting</h4>
                <p>Dashboard e report per analisi delle performance</p>
              </div>
              <div className="control-item">
                <div className="control-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h4>Scalabilità</h4>
                <p>Gestione flessibile delle risorse in base al carico di lavoro</p>
              </div>
              <div className="control-item">
                <div className="control-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4>Sicurezza</h4>
                <p>Gestione centralizzata di credenziali e permessi di accesso</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CosaFacciamo;
