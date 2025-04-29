import { useState, useEffect, useMemo } from 'react';

const ActualityComp = () => {
    // Date cible du concert (ajustez l'heure si nécessaire)
    const targetDate = useMemo(
      () => new Date("2025-06-28T20:00:00"),
      []
    );

    // État pour stocker les unités de temps restantes
    const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

    useEffect(() => {
      const intervalId = setInterval(() => {
        const now = new Date();
        const diff = targetDate - now;
  
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
  
        setTimeLeft({ days, hours, minutes, seconds });
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, [targetDate]);

  return (
    <section id="actuality" className="relative scroll-mt-20 py-12 px-4 text-white">
      {/* Image de fond */}
      <div className="absolute inset-0">
        {/* Image */}
        <img
          src="/images/actu-pic.webp"
          alt=""
          className="w-full h-full xl: object-cover brightness-70"
        />

        {/* Overlay dégradé */}
        <div className="absolute inset-0 bg-radial from-transparent to-stone-900"></div>
      </div>
      <div className="relative z-10">
        <h3>Actualités</h3>

        {/* Zone principale texte + affiche */}
        <div className="flex flex-col-reverse md:flex-row max-w-6xl mx-auto  -rotate-2">
          {/* Partie gauche - Texte */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
          <h2 className="text-3xl md:text-6xl mb-4 text-left font-extrabold font-secondary bg-gradient-to-r from-orange-50 via-white to-yellow-50 bg-clip-text text-transparent">
            Vous êtes prêt ?
          </h2>

            <div className='text-justify md:text-left md:text-xl'>
              <p className="mb-4">
                Dans le cadre de la{' '}
                <a
                  href="https://www.mairie-offemont.fr/fr/services/evenements?indexes%5B0%5D=7#:~:text=La%20Commune%20d'Offemont%20donne,%C3%A0%20partir%20de%2014%20h."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-red-400 hover:text-red-400"
                >
                  fête de la commune d'Offemont
                </a>, et avant la fermeture de la salle de la MIEL pour rénovation, nous avons le plaisir de vous présenter un concert exclusif.
              </p>
              <p className="mb-4">
                Venez écouter notre répertoire enrichi de nouveaux titres.
              </p>
              <p>
                Plongez dans notre univers et vivez une expérience&nbsp;unique&nbsp;!
              </p>
              <p className='mt-4'>
                Quand le <span className='font-special text-3xl md:text-4xl'>Rock </span> rencontre la <span className='font-special text-3xl md:text-4xl'>Symphonie !</span>
              </p>
            </div>
          </div>


          {/* Partie droite - Affiche */}
          <div className="w-full md:w-1/2 p-4 flex justify-center items-centerk">
            <img
              src="/images/events/affiche.webp"
              alt="Affiche prochain spectacle"
              className="w-full max-w-sm border-4 lg:border-6 border-white shadow-2xl object-cover logo-shadow"
            />
          </div>
        </div>

        {/* Partie centrale - Lieu, date et compte à rebours */}
        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="text-yellow-50 flex flex-col md:flex-row justify-center items-center gap-2">
            <p className="text-base md:text-xl m-2 md:m-4 px-6 py-2 bg-linear-75 from-slate-500 to-slate-600 w-full md:w-auto text-center text-shadow logo-shadow">
              la MIEL, Offemont
            </p>
            <p className="text-base md:text-xl m-2 md:m-4 px-6 py-2 bg-linear-75 from-slate-500 to-slate-600 w-full md:w-auto text-center text-shadow logo-shadow">
              Samedi 28 juin 2025
            </p>
            <p className="text-base md:text-xl m-2 md:m-4 px-6 py-2 bg-linear-75 from-slate-500 to-slate-600 w-full md:w-auto text-center text-shadow logo-shadow">
              Entrée libre
            </p>
          </div>

          {/* Compte à rebours */}
          <div className="flex justify-center gap-8 md:gap-12 my-8">
            {["Jours", "Heures", "Minutes", "Secondes"].map((label, idx) => (
              <div key={label} className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold text-shadow pb-1">
                  {Object.values(timeLeft)[idx]}
                </span>
                <span className="uppercase text-sm text-shadow">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActualityComp;

