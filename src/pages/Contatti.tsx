import './Contatti.css';
import usePageTitle from '../hooks/usePageTitle';

const Contatti = () => {
  usePageTitle('Contatti');

  return (
    <main className="contatti-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="gradient-text">Contatti</h1>
        </div>
      </section>

      <section className="contatti-content">
        <div className="contatti-container">
          <div className="contact-cards">
            {/* Sede */}
            <div className="contact-card">
              <div className="contact-icon sede-icon">
                <svg viewBox="0 0 64 64" fill="none">
                  {/* Globe base */}
                  <ellipse cx="32" cy="52" rx="20" ry="6" fill="#e0e7ff" />
                  {/* Globe */}
                  <circle cx="32" cy="32" r="20" fill="#60a5fa" />
                  <ellipse cx="32" cy="32" rx="8" ry="20" fill="#93c5fd" stroke="#3b82f6" strokeWidth="1" />
                  <path d="M12 32h40" stroke="#3b82f6" strokeWidth="1" />
                  <path d="M14 24h36" stroke="#3b82f6" strokeWidth="0.5" />
                  <path d="M14 40h36" stroke="#3b82f6" strokeWidth="0.5" />
                  {/* Pin */}
                  <path d="M44 18c0 5-6 10-6 10s-6-5-6-10a6 6 0 1112 0z" fill="#f97316" />
                  <circle cx="38" cy="18" r="2" fill="#fff" />
                </svg>
              </div>
              <h3>Sede</h3>
              <p>Piazza della Rotonda 2</p>
              <p>00186, Roma</p>
            </div>

            {/* Telefono */}
            <div className="contact-card">
              <div className="contact-icon phone-icon">
                <svg viewBox="0 0 64 64" fill="none">
                  {/* Base shadow */}
                  <ellipse cx="32" cy="52" rx="18" ry="5" fill="#e0e7ff" />
                  {/* Phone body */}
                  <path d="M20 40l-8-8 12-12 8 8c4-2 8-2 12 2s4 8 2 12l8 8-12 12-8-8c-4 2-8 2-12-2s-4-8-2-12z" fill="#60a5fa" stroke="#3b82f6" strokeWidth="2" />
                  <path d="M24 36l-4-4 8-8 4 4" fill="#93c5fd" />
                  {/* Signal waves */}
                  <path d="M42 14c2 2 3 5 3 8" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
                  <path d="M46 10c3 3 5 8 5 13" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
                  <path d="M50 6c4 4 7 11 7 18" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Telefono</h3>
              <p>Business: +39 0650797484</p>
              <p>Fax: +39 0650799476</p>
            </div>

            {/* Email */}
            <div className="contact-card">
              <div className="contact-icon email-icon">
                <svg viewBox="0 0 64 64" fill="none">
                  {/* Base shadow */}
                  <ellipse cx="32" cy="52" rx="18" ry="5" fill="#e0e7ff" />
                  {/* Document */}
                  <rect x="18" y="20" width="28" height="32" rx="2" fill="#60a5fa" />
                  <rect x="22" y="28" width="20" height="2" rx="1" fill="#93c5fd" />
                  <rect x="22" y="34" width="16" height="2" rx="1" fill="#93c5fd" />
                  <rect x="22" y="40" width="18" height="2" rx="1" fill="#93c5fd" />
                  {/* Chat bubble */}
                  <path d="M38 8h18a2 2 0 012 2v14a2 2 0 01-2 2h-4l-4 4v-4h-10a2 2 0 01-2-2V10a2 2 0 012-2z" fill="#f97316" />
                  <text x="47" y="20" fontSize="12" fill="#fff" fontWeight="bold" textAnchor="middle">?</text>
                </svg>
              </div>
              <h3>Email</h3>
              <p><a href="mailto:info@medialogicai.it">info@medialogicai.it</a></p>
              <p>www.medialogicai.it</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contatti;
