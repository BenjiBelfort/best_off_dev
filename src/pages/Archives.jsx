import eventsData from '../data/pastEvents.json';
import EventCard from '../components/EventCard';

const Archives = () => {
  return (
    <section className="container mx-auto">
        <h3>Archives des concerts</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventsData.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default Archives;
