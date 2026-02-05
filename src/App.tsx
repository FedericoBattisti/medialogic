import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import UseCaseDetail from './pages/UseCaseDetail';

import ParticleBackground from './components/ParticleBackground';
import './App.css';

function App() {
  return (
    <Router>
      <ParticleBackground />
      <ScrollToTop />
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/cosa-facciamo" element={<CosaFacciamo />} />
          <Route path="/tecnologie/prodotti" element={<Prodotti />} />
          <Route path="/tecnologie/partner" element={<Partner />} />
          <Route path="/use-cases/le-nostre-soluzioni" element={<UseCases />} />
          <Route path="/use-cases/:slug" element={<UseCaseDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
