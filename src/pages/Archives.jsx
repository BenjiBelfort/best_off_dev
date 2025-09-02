// src/pages/Archives.jsx
import { Title, Meta, Link as LinkTag } from 'react-head';
import eventsData from '../data/pastEvents.json';
import EventCard from '../components/EventCard';
import Separator from '../components/ui/Separator';
import Recruitment from '../components/Recruitment';

const BASE = 'https://bestoffmusic.fr';

const Archives = () => {
  const url = `${BASE}/archives`;

  return (
    <>
      {/* === Balises head spécifiques à /archives === */}
      <Title>Archives — BEST OFF’</Title>
      <Meta
        name="description"
        content="Découvrez les archives des concerts passés de BEST OFF’, groupe de rock symphonique basé à Belfort."
      />
      <LinkTag rel="canonical" href={url} />

      {/* Open Graph */}
      <Meta property="og:title" content="Archives — BEST OFF’" />
      <Meta
        property="og:description"
        content="Photos, dates et lieux des concerts passés de BEST OFF’."
      />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content={url} />
      <Meta property="og:image" content={`${BASE}/hero.webp`} />
      <Meta property="og:locale" content="fr_FR" />

      {/* Twitter */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Archives — BEST OFF’" />
      <Meta
        name="twitter:description"
        content="Retrouvez toutes les archives des concerts passés de BEST OFF’."
      />
      <Meta name="twitter:image" content={`${BASE}/hero.webp`} />

      {/* === Contenu === */}
      <section className="container mx-auto">
        <h3>Archives des concerts</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
          {eventsData.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        <Separator />
        <Recruitment />
      </section>
    </>
  );
};

export default Archives;
