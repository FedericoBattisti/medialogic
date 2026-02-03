import Hero from '../components/Hero';
import Pillars from '../components/Pillars';
import Services from '../components/Services';
import Contact from '../components/Contact';
import usePageTitle from '../hooks/usePageTitle';

const Home = () => {
  usePageTitle('Medialogic Artificial Intelligence');
  
  return (
    <main>
      <Hero />
      <Pillars />
      <Services />
      <Contact />
    </main>
  );
};

export default Home;
