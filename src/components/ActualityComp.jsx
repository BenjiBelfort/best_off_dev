import { FaArrowRight } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { BsCalendarHeartFill } from "react-icons/bs";
import { GoClockFill } from "react-icons/go";
// import { FaTicket } from "react-icons/fa6"; // décommenter si besoin
// import { FaGlassMartiniAlt } from "react-icons/fa"; // décommenter si besoin

const ActualityComp = () => {
  return (
    <section id="actuality" className="relative scroll-mt-20 py-12 px-4 text-white">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <img
          // src="/images/actu-pic.webp"
          src="/images/events/fete-commune-2025/galerie/fete-commune-2025_10.webp"
          alt="Ambiance concert Best Off"
          width="1200"
          height="900"
          className="w-full h-full object-cover brightness-70"
        />
        <div className="absolute inset-0 bg-radial from-transparent to-stone-900"></div>
      </div>

      <div className="relative z-10">
        <h3>Actualités</h3>

        {/* Zone principale texte + visuel */}
        <div className="flex flex-col-reverse lg:flex-row max-w-6xl mx-auto">
          {/* Texte */}
          <div className="w-full lg:w-1/2 px-8 flex flex-col justify-around">
            <h2 className="text-3xl md:text-6xl mb-4 text-left font-extrabold font-secondary bg-gradient-to-r from-orange-50 via-white to-yellow-50 bg-clip-text text-transparent">
              Best Off joue pour le Téléthon
            </h2>

            <div className="lg:text-left lg:text-xl">
              <p className="mb-4">
                On remet le son au <strong>Gymnase d’Offemont</strong> pour une soirée
                100% good vibes… et 100% utile.
                Venez nombreux : plus on est de fous, plus on lève de fonds !
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
                  alt="Logo Téléthon France"
                  width="360"
                  height="180"
                  className="w-56 h-auto object-contain"
                  loading="lazy"
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
              <BsCalendarHeartFill /> samedi 6 décembre 2025
            </p>
            <p className="flex justify-center items-center gap-2 text-base md:text-xl m-1 md:m-2 px-6 py-2 bg-linear-75 from-slate-500 to-slate-600 w-full md:w-auto text-center text-shadow logo-shadow">
              <MdPlace /> Gymnase d’Offemont
            </p>
            <p className="flex justify-center items-center gap-2 text-base md:text-xl m-1 md:m-2 px-6 py-2 bg-linear-75 from-slate-500 to-slate-600 w-full md:w-auto text-center text-shadow logo-shadow">
              <GoClockFill /> 20:00
            </p>
            {/* Décommente si besoin */}
            {/* <p className="flex justify-center items-center gap-2 text-base md:text-xl m-1 md:m-2 px-6 py-2 bg-linear-75 from-slate-500 to-slate-600 w-full md:w-auto text-center text-shadow logo-shadow">
              <FaTicket /> entrée libre
            </p>
            <p className="flex justify-center items-center gap-2 text-base md:text-xl m-1 md:m-2 px-6 py-2 bg-linear-75 from-slate-500 to-slate-600 w-full md:w-auto text-center text-shadow logo-shadow">
              <FaGlassMartiniAlt /> buvette
            </p> */}
          </div>

          {/* Appels à l’action */}
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

          {/* Mini note rassurante / fun */}
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
