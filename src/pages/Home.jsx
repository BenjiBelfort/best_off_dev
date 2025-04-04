import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainImg from '../components/MainImg';
import Actuality from "../components/ActualityComp";
import Biographie from '../components/Biographie';
import Separator from '../components/Separator';
import eventsData from '../data/pastEvents.json';
import Gallery from '../components/ui/Gallery';

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

  // Récupérer quelques photos pour l'affichage dans Home (ex. celles du premier événement avec une galerie)
  const galleryPhotos = eventsData
    .filter(event => event.gallery_photos)
    .flatMap(event => event.gallery_photos);

  return (
    <div>
      <MainImg />
      <div className="container mx-auto">
        <Actuality />
        <Separator />
        <Biographie />
        <Separator />

        {/* Affichage d'une partie de la galerie sur la page d'accueil */}
        <h3>Galerie photos</h3>
        <Gallery photos={galleryPhotos} seeMoreUrl="/galerie" />
      </div>
    </div>
  );
};

export default Home;
