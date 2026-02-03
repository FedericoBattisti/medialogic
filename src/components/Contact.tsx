import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY', // Sostituisci con la tua access key da web3forms.com
          to_email: 'info@medialogicai.it',
          subject: 'Nuova richiesta contatto - Medialogic AI',
          phone: phone,
          message: `Nuovo contatto richiesto.\n\nNumero di telefono: ${phone}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setPhone('');
        }, 3000);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error('Errore:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contatti" className="contact">
      <div className="contact-bg">
        <div className="contact-grid"></div>
        <div className="contact-glow"></div>
      </div>
      <div className="contact-container">
        <div className="contact-badge">
          <span className="badge-dot"></span>
          PRONTO A INIZIARE?
        </div>
        <h2 className="contact-title">
          Entra nell'era dell'<span className="gradient-text">automazione</span>
        </h2>
        <p className="contact-subtitle">
          Lascia il tuo numero di telefono, ti ricontatteremo al più presto!
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <div className="input-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <input
              type="tel"
              placeholder="+39 xxx xxx xxxx"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="contact-input"
              required
              disabled={loading}
            />
          </div>
          <button 
            type="submit" 
            className={`contact-button ${submitted ? 'success' : ''} ${error ? 'error' : ''}`}
            disabled={loading || submitted}
          >
            {submitted ? (
              <>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                RICHIESTA INVIATA
              </>
            ) : loading ? (
              'INVIO IN CORSO...'
            ) : error ? (
              'ERRORE - RIPROVA'
            ) : (
              'INVIA NUMERO'
            )}
          </button>
        </form>
        <div className="contact-features">
          <div className="feature">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Risposta entro 24h</span>
          </div>
          <div className="feature">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>Dati protetti</span>
          </div>
          <div className="feature">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
            <span>Consulenza gratuita</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
