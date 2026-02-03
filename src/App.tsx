import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useMemo } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ChiSiamo from './pages/ChiSiamo';
import Contatti from './pages/Contatti';
import CosaFacciamo from './pages/CosaFacciamo';
import Prodotti from './pages/Prodotti';
import Partner from './pages/Partner';
import UseCases from './pages/UseCases';
import './App.css';

function App() {
  const particles = useMemo(() => 
    [...Array(30)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${3 + Math.random() * 4}s`
    })), []
  );

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <div className="global-particles">
          {particles.map((p) => (
            <div 
              key={p.id} 
              className="global-particle" 
              style={{
                left: p.left,
                animationDelay: p.animationDelay,
                animationDuration: p.animationDuration
              }}
            />
          ))}
        </div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/cosa-facciamo" element={<CosaFacciamo />} />
          <Route path="/tecnologie/prodotti" element={<Prodotti />} />
          <Route path="/tecnologie/partner" element={<Partner />} />
          <Route path="/use-cases/le-nostre-soluzioni" element={<UseCases />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
