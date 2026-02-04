import { Link } from 'react-router-dom';
import './UseCases.css';
import usePageTitle from '../hooks/usePageTitle';

const useCasesData = [
  {
    category: 'AI & Machine Learning',
    cases: [
      { title: 'Gestione Citazioni', slug: 'gestione-citazioni', description: 'Analisi automatica e classificazione di citazioni documentali' },
      { title: 'Transaction Anomaly Detection', slug: 'transaction-anomaly-detection', description: 'Rilevamento anomalie nelle transazioni finanziarie' },
      { title: 'Valutazione Acque', slug: 'valutazione-acque', description: 'Analisi predittiva della qualità delle acque' }
    ]
  },
  {
    category: 'Procurement',
    cases: [
      { title: 'Annotazioni ANAC', slug: 'annotazioni-anac', description: 'Automazione controlli ANAC per appalti pubblici' },
      { title: 'Agenzia delle Entrate', slug: 'agenzia-delle-entrate', description: 'Integrazione automatica con servizi AdE' },
      { title: 'Casellario Giudiziale', slug: 'casellario-giudiziale', description: 'Verifica automatica casellario giudiziale' },
      { title: 'Controllo CERVED', slug: 'controllo-cerved', description: 'Automazione verifica dati CERVED' },
      { title: 'Antimafia', slug: 'antimafia', description: 'Controlli antimafia automatizzati' },
      { title: 'Controllo DURC', slug: 'controllo-durc', description: 'Verifica automatica regolarità contributiva' }
    ]
  },
  {
    category: 'HR & Operations',
    cases: [
      { title: 'Gestione parco auto', slug: 'gestione-parco-auto', description: 'Automazione gestione flotta aziendale' },
      { title: 'Gestione Master Data', slug: 'gestione-master-data', description: 'Sincronizzazione e pulizia dati anagrafici' },
      { title: 'Gestione ticket di assistenza', slug: 'gestione-ticket-assistenza', description: 'Smistamento automatico richieste supporto' },
      { title: 'Canalizzatore automatizzato', slug: 'canalizzatore-automatizzato', description: 'Routing intelligente delle comunicazioni' },
      { title: 'Canalizzatore e-mail', slug: 'canalizzatore-email', description: 'Classificazione e smistamento email automatico' }
    ]
  },
  {
    category: 'Finance & Automotive',
    cases: [
      { title: 'Cassetto Fiscale', slug: 'cassetto-fiscale', description: 'Automazione accesso e gestione cassetto fiscale' },
      { title: 'Validazione Dati e Documenti', slug: 'validazione-dati-documenti', description: 'Verifica automatica documentazione automotive' }
    ]
  }
];

const UseCases = () => {
  usePageTitle('Use Cases');
  
  return (
    <main className="usecases-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className='gradient-text'>Le nostre soluzioni</h1>
          <p className="page-subtitle">Use Cases & Esperienze</p>
        </div>
      </section>

      <section className="usecases-content">
        <div className="usecases-container">
          <div className="intro-section">
            <h2>Le nostre <span className="gradient-text">esperienze</span></h2>
            <p>
              Scopri dalla lista in basso le diverse possibilità di applicazione delle nostre soluzioni.
            </p>
          </div>

          <div className="usecases-categories">
            {useCasesData.map((category, index) => (
              <div key={index} className="category-section">
                <h3 className="category-title">
                  <span className="category-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </span>
                  {category.category}
                </h3>
                <div className="cases-grid">
                  {category.cases.map((useCase, idx) => (
                    <Link to={`/use-cases/${useCase.slug}`} key={idx} className="case-card">
                      <h4>{useCase.title}</h4>
                      <p>{useCase.description}</p>
                      <span className="case-link">
                        Scopri di più →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="cta-section">
            <h3>Hai un progetto simile?</h3>
            <p>Contattaci per scoprire come possiamo aiutarti ad automatizzare i tuoi processi.</p>
            <Link to="/contatti" className="cta-button">Richiedi una consulenza</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UseCases;
