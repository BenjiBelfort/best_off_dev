import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <Link 
      to={`/archives/${event.id}`}
      className="group relative block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="aspect-square">
        <img
          src={event.photo_cover || '/placeholder-event.jpg'}
          alt={event.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-xl font-bold text-white">{event.title}</h3>
        <p className="text-sm text-gray-200">{event.date}</p>
      </div>
    </Link>
  );
};

export default EventCard;