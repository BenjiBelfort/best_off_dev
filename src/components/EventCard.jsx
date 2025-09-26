import { Link } from "react-router-dom";
import EventBadges from "./ui/EventBadges";

const EventCard = ({ event }) => {
  return (
    <Link
      to={`/archives/${event.id}`}
      className="group relative block overflow-hidden cover-shadow"
      aria-label={`${event.title} — voir les détails`}
    >
      <div className="aspect-[3/4]">
        <img
          src={event.photo_cover || "/placeholder-event.jpg"}
          alt={event.title || "Événement"}
          className="h-full w-full object-cover grayscale-[50%] transition-all duration-300 group-hover:grayscale-0 group-hover:scale-112"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Dégradé pour la lisibilité du titre */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-black/90" />

      {/* Contenu */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 text-white border-4 lg:border-6 border-stone-200 shadow-2xl">
        <div>
          <h4 className="text-2xl pb-1 text-left text-shadow transition-[font-weight,transform] duration-300 group-hover:font-extrabold">
            {event.title}
          </h4>
          <p className="text-sm">{event.lieu}</p>
          <p className="text-sm font-bold">{event.date}</p>
        </div>

        {/* Bas : badges à gauche, CTA à droite */}
        <div className="flex items-end justify-between">
          <EventBadges event={event} />
          <span className="inline-block text-sm text-shadow bg-red-400/80 px-2 py-1 transition-transform duration-300 group-hover:scale-115">
            lire la suite →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
