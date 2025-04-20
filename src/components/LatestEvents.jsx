// src/components/LatestEvents.jsx
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import eventsData from '../data/pastEvents.json';
import EventCard from './EventCard';
import SeeMoreButton from './ui/SeeMoreButton';

const LatestEvents = () => {
  const navigate = useNavigate();

  // Trie par date décroissante et garde les 3 premiers
  const latest = useMemo(() => {
    return [...eventsData]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);
  }, []);

  const goToArchives = () => {
    navigate('/archives');
  };

  return (
    <section id="latest-events" className="container mx-auto my-8">
      <h3>Nos derniers concerts</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {latest.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      <SeeMoreButton onClick={goToArchives} label="Voir plus +" />
    </section>
  );
};

export default LatestEvents;
