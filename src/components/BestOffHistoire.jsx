const BestOffHistoire = () => {
  // Date de création : 16 octobre 2015
  const creationDate = new Date(2015, 9, 16); // mois en JS = 0-based → 9 = octobre
  const today = new Date();

  // calcul en années pleines
  let years = today.getFullYear() - creationDate.getFullYear();
  const hasHadAnniversaryThisYear =
    today.getMonth() > creationDate.getMonth() ||
    (today.getMonth() === creationDate.getMonth() &&
      today.getDate() >= creationDate.getDate());

  if (!hasHadAnniversaryThisYear) {
    years -= 1;
  }

  return (
    <section
      id="histoire"
      className="scroll-mt-20 mx-auto max-w-5xl px-4 sm:px-6 py-8 text-white"
    >
      <h3>Histoire</h3>
      <h4 className="font-bold text-xl sm:text-3xl text-center bg-gradient-to-r from-orange-50 via-white to-yellow-50 bg-clip-text text-transparent font-secondary tracking-wide">
        Aux origines de BEST OFF’<br />quand l’idée rock symphonique a frappé
      </h4>
      <br />

      {/* Bande visuelle avec la jaquette de Dune et le portrait de Roland */}
      <div className="sm:mt-6 grid grid-cols-1 sm:grid-cols-5 gap-12 items-center mb-8">
        {/* Desktop : image à gauche */}
        <figure className="hidden sm:block sm:col-span-2">
          <a href="https://youtube.com/playlist?list=PLAi1LIeUCIJ3Tdt7TnG2lN4Pv0yzS0lM2&si=hjqiZD-LwVAVZ3Kq"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/toto.webp"
              alt="Album Bobby Kimball Classic Toto Hits (with the Frankfurt Rock Orchestra) — inspiration rock symphonique"
              width={800}
              height={800}
              loading="lazy"
              className="w-full h-auto cover-shadow"
            />
          </a>
          <figcaption className="mt-4 text-sm text-white/70 text-center italic">
            Bobby Kimball Classic Toto Hits <br />
            (with the Frankfurt Rock Orchestra)
          </figcaption>
        </figure>

        {/* Texte pour desktop */}
        <div className="hidden sm:block sm:col-span-3">
          <p className="italic text-lg sm:text-xl text-white/90">
            Il était une fois, un gars musicien qui se baladait dans un centre commercial
            et tomba par hasard sur un disque de <strong>Toto</strong> version rock symphonique.<br />
            <br />
            <strong>Étrange !!!</strong> mais ce disque l’interpella. Ni une ni deux le voilà rentré chez lui et
            dévora ce disque de ces deux oreilles pour tomber sous le charme de ce mélange Rock
            Symphonique. Cette idée ne l’a plus jamais quitté, convaincu que ce mélange entre
            instruments classique et moderne allait devenir un son universel.<br />
            <br />
            <strong>BEST OFF’</strong> est né de cette idée il y a maintenant {years} ans. Originalité, musicalité, humilité et humanité sont réunis pour faire revivre ces grands standards universels dans des arrangements
            originaux. Musiciens d’horizons divers et membres de l’association se mobilisent pour
            donner le meilleur à chaque concert.
          </p>
        </div>

        {/* Version mobile : texte découpé + image entre deux */}
        <div className="block sm:hidden">
          <p className="italic text-lg text-white/90 mb-4">
            Il était une fois, un gars musicien qui se baladait dans un centre commercial
            et tomba par hasard sur un disque de Toto version rock symphonique.
          </p>

          <figure className="my-8">
            <a href="https://youtube.com/playlist?list=PLAi1LIeUCIJ3Tdt7TnG2lN4Pv0yzS0lM2&si=hjqiZD-LwVAVZ3Kq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/toto.webp"
                alt="Album Bobby Kimball Classic Toto Hits (with the Frankfurt Rock Orchestra) — inspiration rock symphonique"
                width={800}
                height={800}
                loading="lazy"
                className="w-full h-auto"
              />
            </a>
            <figcaption className="mt-2 text-sm text-white/70 text-center italic">
            Bobby Kimball Classic Toto Hits <br />
            (with the Frankfurt Rock Orchestra)
            </figcaption>
          </figure>

          <p className="italic text-lg text-white/90 mt-4">
            <strong>Étrange !!!</strong> mais ce disque l’interpella. Ni une ni deux le voilà rentré chez lui et
            dévora ce disque de ces deux oreilles pour tomber sous le charme de ce mélange Rock
            Symphonique.<br />
            <br />
            Cette idée ne l’a plus jamais quitté, convaincu que ce mélange entre
            instruments classique et moderne allait devenir un son universel.<br />
            <br />
            <strong>BEST OFF’</strong> est né de cette idée il y a maintenant {years} ans. Originalité, musicalité, humilité et humanité
            sont réunis pour faire revivre ces grands standards universels dans des arrangements
            originaux. Musiciens d’horizons divers et membres de l’association se mobilisent pour
            donner le meilleur à chaque concert.
          </p>
        </div>
      </div>

      {/* Encadré portrait direction artistique */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
        <figure className="sm:order-last">
          <img
            src="/images/roland.webp"
            alt="Roland CIBIL, fondateur et chef d’orchestre de BEST OFF’"
            width={800}
            height={800}
            loading="lazy"
            className="w-full h-auto sepia-50 shadow-lg object-cover"
          />
          <figcaption className="mt-2 sm:mt-4 text-sm text-white/70 text-center">
            Roland CIBIL
          </figcaption>
        </figure>

        <div className="sm:col-span-2">
          <h4 className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-orange-50 via-white to-yellow-50 bg-clip-text text-transparent font-secondary tracking-wide">
            Direction artistique
          </h4>
          <p className="mt-2 text-white/90 [text-wrap:pretty]">
            Sous l’impulsion de son fondateur et chef d’orchestre, Roland CIBIL, BEST OFF’ façonne ce son hybride où guitares, cordes et cuivres se répondent pour servir l’émotion… et la solidarité.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BestOffHistoire;
