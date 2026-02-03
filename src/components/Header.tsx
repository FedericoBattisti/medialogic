import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setDropdownOpen(!dropdownOpen);
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/Logo Medialogic AI.png" alt="MedialogicAI" className="logo-img" />
        </Link>
        <nav className="nav">
          <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`nav-overlay ${menuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
          <ul className={`nav-list ${menuOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/chi-siamo" onClick={closeMenu}>Chi siamo</Link></li>
            <li><Link to="/cosa-facciamo" onClick={closeMenu}>Cosa facciamo</Link></li>
            <li className={`dropdown ${dropdownOpen ? 'active' : ''}`}>
              <span className="dropdown-trigger" onClick={toggleDropdown}>
                Tecnologie
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <ul className="dropdown-menu">
                <li><Link to="/tecnologie/prodotti" onClick={closeMenu}>Prodotti</Link></li>
                <li><Link to="/tecnologie/partner" onClick={closeMenu}>Partner</Link></li>
              </ul>
            </li>
            <li><Link to="/use-cases/le-nostre-soluzioni" onClick={closeMenu}>Use Cases</Link></li>
            <li><Link to="/contatti" onClick={closeMenu}>Contatti</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
