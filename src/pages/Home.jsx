import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom'

import MainImg from '../components/MainImg';
import Actuality from "../components/ActualityComp";

const Home = () => {
  const location = useLocation();
  const actualityRef = useRef(null);

  useEffect(() => {
    // Gère à la fois les ancres directes et la navigation programmatique
    const hash = window.location.hash.substring(1) || location.state?.scrollTo;
    
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        // Petit délai pour le CSS et les polices
        requestAnimationFrame(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start' 
          });
        });
      }
    }
  }, [location]);


  return (
    <div>
      <MainImg />
      <div className="container mx-auto">
        <div ref={actualityRef} className="h-screen">
          <Actuality />
        </div>
      </div>
    </div>
  );
};

export default Home;
