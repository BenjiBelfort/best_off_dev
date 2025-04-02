import { Link } from 'react-router-dom';
import eventsData from '../data/pastEvents.json'; // Chemin vers votre fichier JSON
import EventCard from '../components/EventCard';

const Archives = () => {
  return (
    <section className="container mx-auto">
        <h3 className="text-5xl text-center">Archives des événements</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventsData.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default Archives;
