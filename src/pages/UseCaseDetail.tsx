import { useParams, Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import './UseCaseDetail.css';

interface UseCaseData {
  title: string;
  category: string;
  sector: string;
  necessity: string;
  activities: string[];
}

const useCasesDetails: Record<string, UseCaseData> = {
  'gestione-citazioni': {
    title: 'Gestione Citazioni',
    category: 'AI & Machine Learning',
    sector: 'Operatore Telefonico',
    necessity: 'Estrarre dalle Citazioni in arrivo sulla PEC le informazioni per distribuire la citazione all\'Avvocato di riferimento, utilizzando AI & ML.',
    activities: [
      'Entrare sulla PEC',
      'Scaricare i File relativi alla citazione',
      'Trasformare i file in word',
      'Inviare file ad una pipeline dedicata di AI',
      'Estrarre i campi utili (al momento circa 25)',
      'Preparare un foglio Excel per il caricamento sul Gestionale',
      'Individuare Avvocato',
      'Inviare pratiche ed info'
    ]
  },
  'transaction-anomaly-detection': {
    title: 'Transaction Anomaly Detection',
    category: 'AI & Machine Learning',
    sector: 'Betting',
    necessity: 'Analizzare le transazioni di pagamento con carta di una società di betting ed individuare situazioni di anomalia.',
    activities: [
      'Intercettare il flusso di transazioni',
      'Estrarre i parametri essenziali definiti dalle feature di analisi',
      'Creare dati di input per la pipeline AI',
      'Inviare file ad una pipeline dedicata di AI',
      'Identificare potenziali anomalie',
      'Comunicarle al team di Operations'
    ]
  },
  'valutazione-acque': {
    title: 'Valutazione Acque',
    category: 'AI & Machine Learning',
    sector: 'Utility',
    necessity: 'Analizzare parametri fisico-chimici delle acque per determinare anomalie in diverse tipologie di situazioni (pipe, serbatoi, …).',
    activities: [
      'Entrare sulla mail',
      'Scaricare i File relativi ai dati per location',
      'Modificare i file e creare un file di input per il motore AI',
      'Il file viene letto e valutato in una pipeline dedicata ad acque ADCU',
      'Vengono determinate le anomalie',
      'Le anomalie o nuove correlazioni vengono descritte su un xls file di Output'
    ]
  },
  'annotazioni-anac': {
    title: 'Annotazioni ANAC',
    category: 'Procurement',
    sector: 'Procurement',
    necessity: 'Automatizzare il processo di reperimento delle annotazioni ANAC.',
    activities: [
      'Accesso al portale ANAC',
      'Accesso alla sezione di interesse',
      'Log-in',
      'Conferma identità',
      'Aggiunta codice fiscale su cui compiere la ricerca',
      'Verifica risultato',
      'In presenza di annotazione nel risultato, salvataggio delle stesse in PDF',
      'Gestione anche risultati con molte annotazioni, salvandole correttamente in PDF'
    ]
  },
  'agenzia-delle-entrate': {
    title: 'Agenzia delle Entrate',
    category: 'Procurement',
    sector: 'Procurement',
    necessity: 'Automatizzare il processo di invio delle lettere all\'Agenzia delle Entrate.',
    activities: [
      'Reperimento informazioni legate all\'operatore economico',
      'Inserimento dati nel modello di richiesta Word',
      'Invio alla segreteria',
      'Invio della richiesta tramite PEC all\'Agenzia delle Entrate',
      'Ricezione delle risposte a mezzo PEC'
    ]
  },
  'casellario-giudiziale': {
    title: 'Casellario Giudiziale',
    category: 'Procurement',
    sector: 'Procurement',
    necessity: 'Automatizzare il processo di invio delle richieste dei certificati del Casellario Giudiziale al Tribunale.',
    activities: [
      'Avvio del software Certificazione Massiva',
      'Apertura maschera per inserire tutti i dati obbligatori',
      'Inserimento dati ed estrazione PDF per la richiesta e file txt con riepilogo',
      'Accesso alla casella di posta certificata',
      'Invio della richiesta con i file PDF e txt',
      'Ricezione risposte via PEC',
      'Inoltro ai colleghi coinvolti per ricerca risultati dei soggetti richiesti'
    ]
  },
  'controllo-cerved': {
    title: 'Controllo CERVED',
    category: 'Procurement',
    sector: 'Procurement',
    necessity: 'Automatizzare il processo per effettuare il controllo CERVED.',
    activities: [
      'Accesso al sistema',
      'Accesso all\'area di interesse',
      'Inserimento codice fiscale',
      'Selezione dell\'operatore economico di interesse',
      'Selezione output di interesse',
      'Salvataggio PDF'
    ]
  },
  'antimafia': {
    title: 'Antimafia',
    category: 'Procurement',
    sector: 'Procurement',
    necessity: 'Automatizzare il processo per effettuare le richieste di comunicazioni e le informazioni antimafia.',
    activities: [
      'Accesso sito BDNA',
      'Dopo il log-in, passaggi attraverso apertura certificato, chiamata telefonica, e inserimento OTP',
      'Una volta ultimata la procedura d\'accesso, ricerca inserendo dati obbligatori',
      'Selezione del tipo di richiesta (comunicazione o informazione)',
      'Inserimento dei dati richiesti',
      'Invio richiesta e attesa pagina di risultato',
      'Consultazione periodica del portale in caso di esito non immediato',
      'Appena disponibile l\'esito: estrazione, lettura e salvataggio in PDF'
    ]
  },
  'controllo-durc': {
    title: 'Controllo DURC',
    category: 'Procurement',
    sector: 'Procurement',
    necessity: 'Automatizzare il processo per effettuare il controllo e lo scarico del DURC.',
    activities: [
      'Accesso al sistema',
      'Accesso all\'area di interesse',
      'Inserimento codice fiscale',
      'Verifica esistenza DURC',
      'Salvataggio PDF'
    ]
  },
  'gestione-parco-auto': {
    title: 'Gestione Parco Auto',
    category: 'HR & Operations',
    sector: 'HR',
    necessity: 'Registrare e gestire il parco auto aziendale.',
    activities: [
      'Caricare automaticamente i dati delle fatture sul programma gestionale',
      'Registrare le sanzioni ricevute suddivise per veicolo e guidatore',
      'Inoltrare automaticamente le sanzioni al dipendente responsabile',
      'Creare un file per i nuovi autoveicoli',
      'Eliminare automaticamente i veicoli restituiti o dismessi'
    ]
  },
  'gestione-master-data': {
    title: 'Gestione Master Data',
    category: 'HR & Operations',
    sector: 'HR / Prodotti',
    necessity: 'Gestire efficientemente le registrazioni riguardanti i costi delle risorse umane, prodotti.',
    activities: [
      'Inserire dati e/o gestire report su Master DB relativi ad HR o Prodotti',
      'Prendere i dati dalle fonti più disparate (mail, cartaceo, documenti etc)',
      'Gestione particolare per le anagrafiche',
      'Estrapolare le informazioni richieste e copiarle in un database generale'
    ]
  },
  'gestione-ticket-assistenza': {
    title: 'Gestione Ticket di Assistenza',
    category: 'HR & Operations',
    sector: 'Operations',
    necessity: 'Gestire le richieste di ticket tramite dashboard.',
    activities: [
      'Leggere le richieste inviate tramite dashboard',
      'Interpretare e creare il file di istruttoria sul portale',
      'Inviare una risposta automatica al cliente in base ai dati contenuti nel file di istruttoria',
      'Inviare una notifica all\'operatore contenente il quesito già individuato dal robot'
    ]
  },
  'canalizzatore-automatizzato': {
    title: 'Canalizzatore Automatizzato',
    category: 'HR & Operations',
    sector: 'Operations',
    necessity: 'Indirizzare efficientemente le riparazioni e le manutenzioni delle auto nei diversi centri di manutenzione convenzionati.',
    activities: [
      'Creare un file in cui sono inserite tutte le richieste di manutenzione o riparazione',
      'Controllare l\'esattezza di tutti i dati inseriti e in caso contrario avvisare l\'operatore tramite mail',
      'Decidere a quale centro tra quelli in elenco è più efficiente far eseguire la lavorazione',
      'Il processo decisionale prende in considerazione: tipologia di manutenzione, urgenza della richiesta, vicinanza, carico di lavoro effettivo e potenziale del centro di riparazione'
    ]
  },
  'canalizzatore-email': {
    title: 'Canalizzatore E-mail',
    category: 'HR & Operations',
    sector: 'Operations',
    necessity: 'Indirizzare efficientemente le e-mail in arrivo al dipendente responsabile della comunicazione con quel determinato cliente.',
    activities: [
      'Leggere e capire il mittente',
      'Trovare nel database il dipendente preposto alla gestione di quel determinato cliente',
      'Inoltrarla al dipendente competente'
    ]
  },
  'cassetto-fiscale': {
    title: 'Cassetto Fiscale',
    category: 'Finance & Automotive',
    sector: 'AFC',
    necessity: 'Verificare il contenuto del cassetto fiscale e effettuare un controllo rispetto alla contabilità in essere sul gestionale in particolare SAP.',
    activities: [
      'Entrare sul Cassetto Fiscale',
      'Effettuare estrazioni e report su periodi definiti',
      'Ottenere le informazioni relative al periodo',
      'Confrontare con quanto contenuto su SAP',
      'Gestire alert su scostamenti'
    ]
  },
  'validazione-dati-documenti': {
    title: 'Validazione Dati e Documenti',
    category: 'Finance & Automotive',
    sector: 'Automotive',
    necessity: 'Servizio di validazione dei dati e dei documenti ricevuti dai propri clienti per le pratiche di finanziamento.',
    activities: [
      'Sistema automatico per il riconoscimento del contenuto dei documenti e la validazione degli stessi anche rispetto a banche dati esterne',
      'Sistema di automazione basato su Robotic Process Automation per la gestione delle attività necessarie sul sistema gestionale (estrazione dati, data entry, upload documentazione)',
      'Gruppo di operatori a supporto del processo di riconoscimento e per la gestione degli scarti e supervisione delle attività robotizzate'
    ]
  }
};

const UseCaseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const useCase = slug ? useCasesDetails[slug] : null;
  
  usePageTitle(useCase?.title || 'Use Case');

  if (!useCase) {
    return (
      <main className="usecase-detail-page">
        <section className="page-hero">
          <div className="page-hero-content">
            <h1>Use Case non trovato</h1>
            <Link to="/use-cases/le-nostre-soluzioni" className="back-link">
              ← Torna alle soluzioni
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="usecase-detail-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <span className="category-badge">{useCase.category}</span>
          <h1 className="gradient-text">{useCase.title}</h1>
          <span className="sector-badge">{useCase.sector}</span>
        </div>
      </section>

      <section className="usecase-detail-content">
        <div className="usecase-detail-container">
          <div className="necessity-section">
            <div className="section-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2>Necessità</h2>
            <p>{useCase.necessity}</p>
          </div>

          <div className="activities-section">
            <h2>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              Attività svolte dal sistema
            </h2>
            <div className="activities-grid">
              {useCase.activities.map((activity, index) => (
                <div key={index} className="activity-card">
                  <span className="activity-number">{index + 1}</span>
                  <p>{activity}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="cta-section">
            <h3>Vuoi implementare una soluzione simile?</h3>
            <p>Contattaci per una consulenza gratuita e scopri come possiamo aiutarti.</p>
            <div className="cta-buttons">
              <Link to="/contatti" className="cta-button primary">Richiedi informazioni</Link>
              <Link to="/use-cases/le-nostre-soluzioni" className="cta-button secondary">
                ← Tutte le soluzioni
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UseCaseDetail;