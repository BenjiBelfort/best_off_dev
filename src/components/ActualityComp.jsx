const ActualityComp = () => {
  return (
    <section id="actuality" className="scroll-mt-20 py-12 px-4 text-white">
      <h3>Actualités</h3>

      <div className="max-w-3xl mx-auto bg-stone-800 overflow-hidden border-4 border-white">
        {/* Affiche */}
        <img
          src="/images/events/affiche.webp"
          alt="Affiche prochain spectacle"
          className="h-full w-full object-cover"
        />

        {/* Contenu texte */}
        <div className="p-6 space-y-4">
          <h4 className="mt-2">Concert Rock Symphonique</h4>
          <div className="flex flex-col md:flex-row justify-center items-center gap-2">
            <p className="text-base md:text-xl m-2 md:m-4 px-4 py-1 bg-slate-600 rounded-full w-full md:w-auto text-center">
              Samedi 28 juin 2025
            </p>
            <p className="text-base md:text-xl m-2 md:m-4 px-4 py-1 bg-slate-600 rounded-full w-full md:w-auto text-center">
              la MIEL, Offemont
            </p>
          </div>
          <p>
            Venez découvrir notre tout nouveau spectacle mêlant percussions, théâtre et visuels
            immersifs. Une soirée inoubliable vous attend, entre rythme et émotion...
          </p>
          <p>
            Plongez dans une performance unique en son genre !
          </p>
        </div>
      </div>
    </section>
  );
};

export default ActualityComp;
