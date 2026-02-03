import './Prodotti.css';
import usePageTitle from '../hooks/usePageTitle';

const productsData = [
  {
    name: 'UiPath',
    category: 'RPA Platform',
    description: 'Piattaforma leader per l\'automazione robotica dei processi con capacità AI integrate.',
    features: ['Process Mining', 'Document Understanding', 'AI Center', 'Orchestrator']
  },
  {
    name: 'Automation Anywhere',
    category: 'RPA Platform',
    description: 'Soluzione cloud-native per l\'automazione intelligente end-to-end.',
    features: ['Bot Insight', 'IQ Bot', 'Process Discovery', 'Bot Store']
  },
  {
    name: 'Blue Prism',
    category: 'RPA Platform',
    description: 'Piattaforma enterprise per digital workforce scalabile e sicura.',
    features: ['Control Room', 'Process Assessment', 'Digital Exchange', 'Decipher']
  },
  {
    name: 'Microsoft Power Automate',
    category: 'Low-Code Automation',
    description: 'Automazione low-code integrata nell\'ecosistema Microsoft 365.',
    features: ['Desktop Flows', 'Cloud Flows', 'AI Builder', 'Process Advisor']
  },
  {
    name: 'OpenAI / Azure OpenAI',
    category: 'Generative AI',
    description: 'Modelli di linguaggio avanzati per soluzioni di AI generativa.',
    features: ['GPT-4', 'DALL-E', 'Whisper', 'Embeddings']
  },
  {
    name: 'Soluzioni Proprietarie',
    category: 'Custom Solutions',
    description: 'Framework e acceleratori sviluppati internamente dal team MedialogicAI.',
    features: ['Custom Connectors', 'Industry Templates', 'AI Pipelines', 'Monitoring Tools']
  }
];

const Prodotti = () => {
  usePageTitle('Prodotti');
  
  return (
    <main className="prodotti-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className='gradient-text'>Prodotti</h1>
          <p className="page-subtitle">Le tecnologie che utilizziamo</p>
        </div>
      </section>

      <section className="prodotti-content">
        <div className="prodotti-container">
          <div className="intro-section">
            <h2>Sviluppo <span className="gradient-text">nuovi processi</span></h2>
            <p>
              Nella continua ricerca di supportare in modo sempre più efficiente le Aziende, 
              grazie all'ausilio di Tecnologie innovative di Automazione e di AI, 
              Medialogic Artificial Intelligence utilizza diverse soluzioni:
            </p>
          </div>

          <div className="products-grid">
            {productsData.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-header">
                  <span className="product-category">{product.category}</span>
                  <h3>{product.name}</h3>
                </div>
                <p className="product-description">{product.description}</p>
                <div className="product-features">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Prodotti;
