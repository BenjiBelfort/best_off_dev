// src/pages/Galerie.jsx
import { useState } from 'react';
import { Title, Meta, Link as LinkTag } from 'react-head';
import eventsData from '../data/pastEvents.json';
import Gallery from '../components/ui/Gallery';
import LatestEvents from '../components/LatestEvents';
import Separator from '../components/ui/Separator';
import {
  GiPerspectiveDiceSixFacesRandom,
  GiPerspectiveDiceOne,
  GiPerspectiveDiceTwo,
  GiPerspectiveDiceThree,
  GiPerspectiveDiceFour,
  GiPerspectiveDiceSix,
} from 'react-icons/gi';

const BASE = 'https://bestoffmusic.fr';

export default function Galerie() {
  const allPhotos = eventsData.flatMap((event) => {
    const photos = [];
    if (event.photo_cover) {
      photos.push({ src: event.photo_cover, type: 'cover', event: { id: event.id, title: event.title, date: event.date, lieu: event.lieu }});
    }
    if (event.gallery_photos) {
      photos.push(...event.gallery_photos.map((src) => ({ src, type: 'gallery', event: { id: event.id, title: event.title, date: event.date, lieu: event.lieu }})));
    }
    return photos;
  });

  const [shuffledPhotos, setShuffledPhotos] = useState(() => [...allPhotos].sort(() => Math.random() - 0.5));
  const [DiceIcon, setDiceIcon] = useState(() => GiPerspectiveDiceSixFacesRandom);
  const [isRotating, setIsRotating] = useState(false);

  const reshufflePhotos = () => {
    setIsRotating(true);
    setTimeout(() => {
      setShuffledPhotos([...allPhotos].sort(() => Math.random() - 0.5));
      const icons = [GiPerspectiveDiceOne, GiPerspectiveDiceTwo, GiPerspectiveDiceThree, GiPerspectiveDiceFour, GiPerspectiveDiceSix];
      const next = icons.filter((i) => i !== DiceIcon)[Math.floor(Math.random() * 4)];
      setDiceIcon(() => next);
      setIsRotating(false);
    }, 450);
  };

  const url = `${BASE}/galerie`;

  return (
    <>
      {/* head spécifique */}
      <Title>Galerie photos — Best Off’</Title>
      <Meta name="description" content="Découvrez les photos des concerts de Best Off’, groupe de rock symphonique à Belfort." />
      <LinkTag rel="canonical" href={url} />
      <Meta property="og:title" content="Galerie photos — Best Off’" />
      <Meta property="og:description" content="Retour en images sur nos concerts et évènements." />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content={url} />
      <Meta property="og:image" content={`${BASE}/hero.webp`} />
      <Meta property="og:locale" content="fr_FR" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Galerie photos — Best Off’" />
      <Meta name="twitter:description" content="Photos des concerts et coulisses de Best Off’." />
      <Meta name="twitter:image" content={`${BASE}/hero.webp`} />

      {/* contenu */}
      <section className="container mx-auto">
        <h3>Galerie photos</h3>
        <div className="flex justify-center mb-8">
          <button onClick={reshufflePhotos} className="bg-transparent text-yellow-50 font-semibold cursor-pointer">
            <DiceIcon className={`text-white text-5xl transition-transform duration-450 ${isRotating ? 'rotate-[360deg]' : ''} hover:scale-110`} />
          </button>
        </div>
        <Gallery photos={shuffledPhotos} />
        <Separator />
        <LatestEvents />
      </section>
    </>
  );
}
