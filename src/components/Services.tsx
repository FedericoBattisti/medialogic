import './Services.css';

const ConsultingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
);

const DevelopmentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const AIIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    <circle cx="12" cy="9" r="2" />
    <path d="M12 7v-2M12 11v2M10 9H8M16 9h-2" />
  </svg>
);

const ControlRoomIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  </svg>
);

const servicesData = [
  {
    title: 'Consulenza',
    items: [
      'Introduzione della Digital Transformation e Digital Automation nella tua azienda',
      'Discovery Pure Tech: identificazione di opportunità di automazione e applicazione di AI',
      'Analisi e sviluppo di Business Case personalizzati',
      'Process Mining: analisi dei processi di business basati sui log degli eventi',
      'Ottimizzazione ed evoluzione delle automazioni già esistenti'
    ],
    Icon: ConsultingIcon,
    color: '#00d4ff'
  },
  {
    title: 'Sviluppo',
    items: [
      'Attività di sviluppo su nuovi processi e processi già esistenti',
      'Possibilità di scegliere la tecnologia più adatta alla tua azienda',
      'Attività di migrazione da un RPA tool ad un altro'
    ],
    Icon: DevelopmentIcon,
    color: '#7c3aed'
  },
  {
    title: 'AI',
    items: [
      'Strategia e introduzione AI nelle aziende',
      'Soluzioni personalizzate di AI predittivo e generativo',
      'Utilizzo pipeline di NLP per estrazioni di dati da documenti',
      'Training e Prompting di soluzioni proprietarie',
      'Supporto e attivazione soluzioni Generative di mercato'
    ],
    Icon: AIIcon,
    color: '#00ff88'
  },
  {
    title: 'Control/Evolution Room',
    items: [
      'Monitoraggio costante dei processi automatizzati',
      'Assistenza clienti personalizzata',
      'Presa in carico di attività di sviluppo adattive ed evolutive'
    ],
    Icon: ControlRoomIcon,
    color: '#f472b6'
  }
];

const Services = () => {
  return (
    <section id="servizi" className="services">
      <div className="services-container">
        <div className="services-header">
          <span className="section-tag">I NOSTRI SERVIZI</span>
          <h2 className="services-title">
            Cosa troverai in <span className="gradient-text">MedialogicAI</span>
          </h2>
          <p className="services-subtitle">
            Un mondo di servizi personalizzati sulle tue reali esigenze, per risultati concreti
          </p>
        </div>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card" style={{ '--card-color': service.color } as React.CSSProperties}>
              <div className="service-header">
                <div className="service-icon">
                  <service.Icon />
                </div>
                <h3 className="service-title">{service.title}</h3>
              </div>
              <ul className="service-list">
                {service.items.map((item, idx) => (
                  <li key={idx}>
                    <span className="list-marker"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="service-footer">
                <span className="learn-more">Scopri di più →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
