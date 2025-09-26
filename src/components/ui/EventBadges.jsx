import { AiFillPicture } from "react-icons/ai";
import { FaNewspaper, FaHeart } from "react-icons/fa";

const StatBadge = ({ icon, count }) => {
  if (!count) return null; // n’affiche rien si 0

  return (
    <div className="flex flex-col items-center gap-1">
      {/* Compteur */}
      <span className="text-xs leading-none text-white font-semibold">
        {count}
      </span>
      {/* Icône */}
      <div className="rounded-full bg-white p-1 shadow-xs">
        {icon}
      </div>
    </div>
  );
};

export default function EventBadges({ event }) {
  const photosCount = Array.isArray(event.gallery_photos) ? event.gallery_photos.length : 0;
  const articlesCount = Array.isArray(event.presse) ? event.presse.length : 0;
  const partnersCount = event.partenaires
    ? Object.values(event.partenaires).reduce(
        (sum, arr) => sum + (Array.isArray(arr) ? arr.length : 0),
        0
      )
    : 0;

  return (
    <div className="flex items-end gap-1.5 md:gap-2.5">
      <StatBadge
        icon={<AiFillPicture className="h-4 w-4 md:h-5 md:w-5 text-stone-700" aria-hidden />}
        count={photosCount}
      />
      <StatBadge
        icon={<FaNewspaper className="h-4 w-4 md:h-5 md:w-5 text-stone-700" aria-hidden />}
        count={articlesCount}
      />
      <StatBadge
        icon={<FaHeart className="h-4 w-4 md:h-5 md:w-5 text-pink-700" aria-hidden />}
        count={partnersCount}
      />
    </div>
  );
}
