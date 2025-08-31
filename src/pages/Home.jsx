// Home.jsx
import React, { Suspense, lazy } from 'react';
import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import MainImg from '../components/MainImg';
import Separator from '../components/ui/Separator';
import Actuality from "../components/ActualityComp";
import eventsData from '../data/pastEvents.json';
import Contact from '../components/Contact';

const Biographie = lazy(() => import('../components/Biographie'));
const BestOffHistoire = lazy(() => import('../components/BestOffHistoire'));
const LatestEvents = lazy(() => import('../components/LatestEvents'));
const Gallery = lazy(() => import('../components/ui/Gallery'));
const PartnersComp = lazy(() => import('../components/PartnersComp'));
const Recruitment = lazy(() => import('../components/Recruitment'));

const Home = () => {
  const location = useLocation();
  const defaultOffset = 20;

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

  const galleryPhotos = useMemo(() => {
    const photos = eventsData
      .filter(event => event.gallery_photos)
      .flatMap(event =>
        event.gallery_photos.map(photo => ({
          src: photo,
          event: {
            id: event.id,
            title: event.title,
            date: event.date,
            lieu: event.lieu
          }
        }))
      );
    return photos.sort(() => Math.random() - 0.5);
  }, []);

  const galleryArticles = eventsData
    .filter(event => event.presse)
    .flatMap(event =>
      event.presse.map(photo => ({
        src: photo,
        event: {
          id: event.id,
          title: event.title,
          date: event.date,
          lieu: event.lieu
        }
      }))
    );

  return (
    <div>
      <MainImg />
      <Actuality />
        <div className="container mx-auto">
        <Separator />
        <Suspense fallback={<div>Chargement...</div>}>
          <Biographie />
        </Suspense>
        <Separator />
        <Suspense fallback={<div>Chargement...</div>}>
          <BestOffHistoire />
        </Suspense>
        <Separator />
        <Suspense fallback={<div>Chargement...</div>}>
          <LatestEvents />
        </Suspense>
        <Separator />
        <h3>Galerie photos</h3>
        <Suspense fallback={<div>Chargement...</div>}>
          <Gallery photos={galleryPhotos} seeMoreUrl="/galerie" />
        </Suspense>
        <Separator />
        <h3>Presse</h3>
        <Gallery photos={galleryArticles} seeMoreUrl="/presse" />
        <Separator />
        <Suspense fallback={<div>Chargement...</div>}>
          <Recruitment />
        </Suspense>
        <Separator />
        <Suspense fallback={<div>Chargement...</div>}>
          <PartnersComp />
        </Suspense>
        <Separator />
        <Contact />
      </div>
    </div>
  );
};

export default Home;