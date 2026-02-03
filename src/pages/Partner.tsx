import './Partner.css';
import usePageTitle from '../hooks/usePageTitle';

const Partner = () => {
  usePageTitle('Partner');
  
  return (
    <main className="partner-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className='gradient-text'>Partner</h1>
          <p className="page-subtitle">Le nostre collaborazioni tecnologiche</p>
        </div>
      </section>

      <section className="partner-content">
        <div className="partner-container">
          <div className="under-construction">
            <div className="construction-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h2>Pagina in costruzione</h2>
            <p>
              Stiamo lavorando per presentarti i nostri partner tecnologici.<br />
              Torna presto per scoprire le nostre collaborazioni!
            </p>
            <div className="coming-soon-features">
              <div className="feature">
                <span className="dot"></span>
                Partnership tecnologiche
              </div>
              <div className="feature">
                <span className="dot"></span>
                Certificazioni ufficiali
              </div>
              <div className="feature">
                <span className="dot"></span>
                Collaborazioni strategiche
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Partner;
