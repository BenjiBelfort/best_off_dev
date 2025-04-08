const ActualityComp = () => {
  return (
    <section id="actuality" className="scroll-mt-20 py-12 px-4 text-white">
      <h3 className="text-3xl font-bold mb-6 text-center">Actualités</h3>

      <div className="max-w-4xl mx-auto bg-stone-800 overflow-hidden">
        {/* Affiche */}
        <img
          src="/images/affiche-prochain-spectacle.jpg" // remplace par le bon chemin
          alt="Affiche prochain spectacle"
          className="w-full h-64 object-cover"
        />

        {/* Contenu texte */}
        <div className="p-6 space-y-4">
          <h4>Nom du Spectacle</h4>
          <p>Samedi 25 mai 2025 — Théâtre Municipal, Lyon</p>
          <p>
            Venez découvrir notre tout nouveau spectacle mêlant percussions, théâtre et visuels
            immersifs. Une soirée inoubliable vous attend, entre rythme et émotion.
          </p>
          <p>
            Réservez vos places dès maintenant et plongez dans une performance unique en son genre !
          </p>
        </div>
      </div>
    </section>
  );
};

export default ActualityComp;
