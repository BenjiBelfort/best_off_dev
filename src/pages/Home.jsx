// Home.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainImg from '../components/MainImg';
import Separator from '../components/ui/Separator';
import Actuality from "../components/ActualityComp";
import Biographie from '../components/Biographie';
import eventsData from '../data/pastEvents.json';
import Gallery from '../components/ui/Gallery';
import PartnersComp from '../components/PartnersComp';
import Contact from '../components/Contact';

const Home = () => {
  const location = useLocation();
  const defaultOffset = 20; // Valeur par défaut si aucun offset n'est passé

  useEffect(() => {
    // Vérifie la présence d'une ancre dans l'URL ou dans le state
    const hash = window.location.hash.substring(1) || location.state?.scrollTo;
    const offset = location.state?.offset ?? defaultOffset;
    
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        // Petit délai pour permettre le rendu de la section avant de scroller
        setTimeout(() => {
          const top = element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
          // Optionnel : mettre à jour l'URL avec l'ancre
          window.history.replaceState({}, '', `#${hash}`);
        }, 50);
      }
    }
  }, [location]);

  // Préparation des données pour la galerie, etc.
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
        <Separator />
        <Biographie />
        <Separator />
        <h3>Galerie photos</h3>
        <Gallery photos={galleryPhotos} seeMoreUrl="/galerie" />
        <Separator />
        <h3>Presse</h3>
        <Gallery photos={galleryArticles} seeMoreUrl="/presse" />
        <Separator />
        <PartnersComp />
        <Separator />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
