import './Pillars.css';

const InnovateIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const OptimizeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const EvolveIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const pillarsData = [
  {
    title: 'Innovare',
    description: 'Siamo i pionieri dell\'automazione RPA e dell\'Intelligent Automation in Italia. Le nostre consulenze hanno come obiettivo quello di (ri)innovare i processi aziendali già esistenti.',
    Icon: InnovateIcon,
    color: '#00d4ff'
  },
  {
    title: 'Ottimizzare',
    description: 'Attraverso la consulenza possiamo facilmente individuare quei processi aziendali ottimizzabili tramite l\'introduzione delle nuove tecnologie.',
    Icon: OptimizeIcon,
    color: '#7c3aed'
  },
  {
    title: 'Evolvere',
    description: 'L\'esperienza maturata negli anni ci consente di implementare nuove soluzioni anche su automazioni già esistenti/sviluppate da terzi.',
    Icon: EvolveIcon,
    color: '#f472b6'
  }
];

const Pillars = () => {
  return (
    <section className="pillars">
      <div className="pillars-container">
        {pillarsData.map((pillar, index) => (
          <div key={index} className="pillar-card" style={{ '--accent-color': pillar.color } as React.CSSProperties}>
            <div className="pillar-icon-wrapper">
              <div className="pillar-icon">
                <pillar.Icon />
              </div>
              <div className="icon-glow"></div>
            </div>
            <h3 className="pillar-title">{pillar.title}</h3>
            <p className="pillar-description">{pillar.description}</p>
            <div className="pillar-line"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pillars;
