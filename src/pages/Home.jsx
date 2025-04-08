import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainImg from '../components/MainImg';
import Actuality from "../components/ActualityComp";
import Biographie from '../components/Biographie';
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

  const galleryArticles = eventsData
    .filter(event => event.presse)
    .flatMap(event => event.presse);

  return (
    <div>
      <MainImg />
      <div className="container mx-auto">
        <Actuality />
        <div className="w-[70%] h-px bg-red-300 mx-auto my-4"></div>
        <Biographie />
        <div className="w-[70%] h-px bg-red-300 mx-auto my-4"></div>

        {/* Affichage d'une partie de la galerie sur la page d'accueil */}
        <h3>Galerie photos</h3>
        <Gallery photos={galleryPhotos} seeMoreUrl="/galerie" />
        <div className="w-[70%] h-px bg-red-300 mx-auto my-4"></div>
        <h3>Presse</h3>
        <Gallery photos={galleryArticles} seeMoreUrl="/presse" />
      </div>
    </div>
  );
};

export default Home;
