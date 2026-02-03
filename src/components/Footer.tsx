import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
                <img src="/Logo Medialogic AI.png" alt="MedialogicAI" className='logo-img'/>
            </div>
            <p className="footer-tagline">
              Pionieri dell'automazione RPA e dell'Intelligent Automation in Italia.
            </p>
            <div className="footer-certifications">
              <div className="cert-logo">
                <img src="./rina-iso-9001.png" alt="RINA ISO 9001" />
              </div>
              <div className="cert-logo">
                <img src="./rina-iso-27001.png" alt="RINA ISO 27001" />
              </div>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Servizi</h4>
              <ul>
                <li><a href="#servizi">Consulenza</a></li>
                <li><a href="#servizi">Sviluppo</a></li>
                <li><a href="#servizi">AI Solutions</a></li>
                <li><a href="#servizi">Control Room</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contatti</h4>
              <ul>
                <li><a href="mailto:info@medialogicai.it">info@medialogicai.it</a></li>
                <li>Piazza della Rotonda 2</li>
                <li>00186 Roma</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-legal">
            <p>MEDIALOGIC ARTIFICIAL INTELLIGENCE S.R.L.</p>
            <p>P.IVA: 17302401009 | C.F.: 17302401009 | REA: RM-1709846</p>
          </div>
          <p className="footer-copyright">
            © 2023 MedialogicAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
