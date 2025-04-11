import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <Link 
      to={`/archives/${event.id}`}
      className="group relative block overflow-hidden transition-shadow duration-300"
    >
      <div className="aspect-square">
        <img
          src={event.photo_cover || '/placeholder-event.jpg'}
          alt={event.photo_cover}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent" />
      <div className="text-white absolute bottom-0 left-0 right-0 p-4">
        <h4 className="text-2xl pb-1 text-left">{event.title}</h4>
        <p className="text-sm font-bold">{event.date}</p>
        <p className="text-sm">{event.lieu}</p>
      </div>
    </Link>
  );
};

export default EventCard;