// src/pages/Presse.jsx
import { Title, Meta, Link as LinkTag } from 'react-head';
import eventsData from '../data/pastEvents.json';
import Gallery from '../components/ui/Gallery';
import LatestEvents from '../components/LatestEvents';
import Separator from '../components/ui/Separator';
import { IoNewspaper } from "react-icons/io5";
import PressKit from '../components/PressKit';

const BASE = 'https://bestoffmusic.fr';

export default function Presse() {
  // Récupérer toutes les images "presse"
  const allArticles = eventsData
    .filter((event) => Array.isArray(event.presse) && event.presse.length > 0)
    .flatMap((event) =>
      event.presse.map((src) => ({
        src,
        event: {
          id: event.id,
          title: event.title,
          date: event.date,
          lieu: event.lieu,
        },
      }))
    );

  const url = `${BASE}/presse`;

  return (
    <>
      {/* === Balises head spécifiques à /presse === */}
      <Title>Presse — BEST OFF’ (dossier & articles)</Title>
      <Meta
        name="description"
        content="Espace presse BEST OFF’ : dossier de presse, visuels HD, articles et contacts médias."
      />
      <LinkTag rel="canonical" href={url} />

      {/* Open Graph */}
      <Meta property="og:title" content="Presse — BEST OFF’" />
      <Meta
        property="og:description"
        content="Dossier de presse, visuels HD et publications médias autour de BEST OFF’."
      />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content={url} />
      <Meta property="og:image" content={`${BASE}/hero.webp`} />
      <Meta property="og:locale" content="fr_FR" />

      {/* Twitter */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Presse — BEST OFF’" />
      <Meta
        name="twitter:description"
        content="Dossier de presse, visuels HD et articles."
      />
      <Meta name="twitter:image" content={`${BASE}/hero.webp`} />

      {/* === Contenu === */}
      <section className="container mx-auto">
        <h3>Presse</h3>
        <p className="mb-12 text-white text-center">
          <a href="#press-kit" className='text-xl inline-flex items-center gap-2 hover:tracking-wide hover:scale-115 transition-all duration-300 relative after:absolute after:left-1/2 after:bottom-0 after:transform after:-translate-x-1/2 after:origin-center after:h-[2px] after:w-0 after:bg-red-400 after:transition-all after:duration-300 hover:after:w-full'>
          <IoNewspaper /> Press kit
          </a>
        </p>
        <Gallery photos={allArticles} />
        <Separator />
        <LatestEvents />
        <Separator />

        <PressKit />
      </section>
    </>
  );
}
