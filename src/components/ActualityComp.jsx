import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { BsCalendarHeartFill } from "react-icons/bs";
import { GoClockFill } from "react-icons/go";

const ActualityComp = () => {
  // --- JSON-LD MusicEvent
  const eventLd = {
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    "name": "Best Off' pour le Téléthon",
    "description": "Concert caritatif Best Off' au profit du Téléthon. Entrée libre, dons sur place et sur le site du Téléthon.",
    "startDate": "2025-12-06T20:00:00+01:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "isAccessibleForFree": true,
    "location": {
      "@type": "Place",
      "name": "Gymnase d’Offemont",
      "address": { "@type": "PostalAddress", "addressLocality": "Offemont", "addressCountry": "FR" }
    },
    "performer": { "@type": "MusicGroup", "name": "Best Off'" },
    "organizer": { "@type": "Organization", "name": "AFM-Téléthon" },
    "image": [
      "https://bestoffmusic.fr/images/events/fete-commune-2025/galerie/fete-commune-2025_10.webp",
      "https://bestoffmusic.fr/images/Logo_Telethon_France.png"
    ],
    "url": "https://bestoffmusic.fr/#actuality"
  };

  // --- Tableau d’images pour le diaporama
  const images = [
    "/images/events/fete-commune-2025/galerie/fete-commune-2025_18.webp",
    "/images/events/chougalante-mars-2025/galerie/chougalante-mars-2025_3.webp",
    "/images/events/fete-commune-2025/galerie/fete-commune-2025_10.webp",
    "/images/events/montbouton/galerie/Montbouton_30.webp",
    "/images/events/montbouton/galerie/Montbouton_22.webp",
    "/images/events/souviens-toi/galerie/Souviens-toi_13.webp",
    "/images/events/montbouton/galerie/Montbouton_7.webp",
    "/images/events/souviens-toi/galerie/Souviens-toi_3.webp"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // toutes les 5 secondes
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="actuality" className="relative scroll-mt-28 md:scroll-mt-36 py-12 px-4 text-white overflow-hidden">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventLd) }}
      />

      {/* Image de fond en fondu */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Fond ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover brightness-70 transition-opacity duration-2000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-radial from-transparent to-stone-900" />
      </div>

      <div className="relative z-10">
        <h3>Actualités</h3>

        {/* Zone principale texte + visuel */}
        <div className="flex flex-col-reverse lg:flex-row max-w-6xl mx-auto lg:-rotate-2">
          {/* Texte */}
          <div className="w-full lg:w-1/2 px-8 flex flex-col justify-around">
            <h2 className="text-3xl md:text-6xl mb-4 text-left font-extrabold font-secondary bg-gradient-to-r from-orange-50 via-white to-yellow-50 bg-clip-text text-transparent">
              Best Off joue pour le Téléthon
            </h2>

            <div className="lg:text-left lg:text-xl text-shadow">
              <p className="mb-4">
                On remet le son au <strong>Gymnase d’Offemont</strong> pour une soirée
                100% good vibes… et 100% utile. Venez nombreux : plus on est de fous, plus on lève de fonds !
              </p>
              <p className="mb-4">
                Au programme : notre set Best Off boosté, des reprises qui font
                chanter, et une ambiance chaleureuse au profit du <strong>Téléthon</strong>.
              </p>
              <p className="mb-4">
                <strong>Entrée libre</strong> — dons sur place le jour J. Et si vous ne pouvez pas venir,
                vous pouvez aussi soutenir l’événement directement sur le site du <strong>Téléthon</strong>.
              </p>
            </div>
          </div>

          {/* Visuel / Affiche en attente */}
          <div className="w-full md:w-1/2 p-4 flex justify-center items-center logo-shadow mx-auto">
            <div className="w-full max-w-sm border-4 lg:border-6 border-white shadow-2xl bg-white/90 backdrop-blur-sm overflow-hidden">
              <div className="p-4 bg-gradient-to-br from-yellow-200 via-pink-200 to-cyan-200 text-stone-900 text-center font-semibold">
                Affiche en préparation
              </div>
              <div className="h-72 p-6 flex flex-col justify-center items-center gap-4 bg-white">
                <img
                  src="/images/Logo_Telethon_France.png"
                  alt="Logo officiel AFM-Téléthon"
                  width="360"
                  height="180"
                  className="w-56 h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <p className="text-stone-700 text-center text-sm">
                  Concert caritatif au profit du <strong>Téléthon</strong> — merci pour votre soutien 💛
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Infos pratiques + CTAs */}
        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="text-yellow-50 flex flex-col lg:flex-row justify-center items-center gap-2">
            <p className="flex justify-center items-center gap-2 text-base md:text-xl m-1 md:m-2 px-6 py-2 bg-linear-75 from-slate-500 to-slate-600 w-full md:w-auto text-center text-shadow logo-shadow">
              <BsCalendarHeartFill />
              <time dateTime="2025-12-06">samedi 6 décembre 2025</time>
            </p>
            <p className="flex justify-center items-center gap-2 text-base md:text-xl m-1 md:m-2 px-6 py-2 bg-linear-75 from-slate-500 to-slate-600 w-full md:w-auto text-center text-shadow logo-shadow">
              <MdPlace /> Gymnase d’Offemont
            </p>
            <p className="flex justify-center items-center gap-2 text-base md:text-xl m-1 md:m-2 px-6 py-2 bg-linear-75 from-slate-500 to-slate-600 w-full md:w-auto text-center text-shadow logo-shadow">
              <GoClockFill />
              <time dateTime="20:00">20:00</time>
            </p>
          </div>

          {/* Appel à l’action */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="https://www.afm-telethon.fr/fr/evenement-telethon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold bg-yellow-300 text-stone-900 hover:bg-yellow-200 hover:tracking-wide hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Faire un don au Téléthon
              <FaArrowRight className="hidden sm:block" />
            </a>
          </div>

          <p className="text-sm text-stone-200 text-center max-w-3xl">
            Pas besoin de confettis, on s’occupe du show. Vous, venez avec vos amis, votre meilleure voix,
            et votre plus beau geste pour le <strong>Téléthon</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ActualityComp;
