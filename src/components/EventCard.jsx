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

      <div className="absolute inset-0 bg-gradient-to-b from-black/100 to-transparent" />

      {/* Container texte avec layout haut-bas */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
        <div>
          <h4 className="text-2xl pb-1 text-left">{event.title}</h4>
          <p className="text-sm">{event.lieu}</p>
          <p className="text-sm font-bold">{event.date}</p>
        </div>

        <div className="text-right">
          <span className="text-sm text-shadow bg-red-400/80 px-2 py-1">lire la suite →</span>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;