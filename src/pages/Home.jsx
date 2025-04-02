import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainImg from '../components/MainImg';
import Actuality from "../components/ActualityComp";
import Biographie from '../components/Biographie';
import Separator from '../components/Separator';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = window.location.hash.substring(1) || location.state?.scrollTo;
    
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        // Petit délai pour permettre le rendu
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start' 
          });
        }, 50);
      }
    }
  }, [location]);

  return (
    <div>
      <MainImg />
      <div className="container mx-auto">
        <Actuality />
        <Separator />
        <Biographie />
        <Separator />
      </div>
    </div>
  );
};

export default Home;