// src/components/Recruitment.jsx
const Recruitment = () => {
  const roles = [
    { title: "Choristes", detail: "Pour soutenir les lead" },
    { title: "Cordes", detail: "Violon, Alto, Violoncelle" }
  ];

  return (
    <section id="recrutement" className="scroll-mt-45 mx-auto max-w-5xl px-4 py-8">
      <p className="text-white text-center mb-10">
        BEST OFF' recrute pour renforcer l’équipe musicale !{" "}
        Si tu as la motivation et l’envie de partager la scène, rejoins-nous
      </p>

      {/* Grid centrée vraiment */}
      <div className="mx-auto">
        <div
          className="
            grid gap-6
            justify-center
            grid-cols-[repeat(auto-fit,minmax(16rem,max-content))]
          "
        >
          {roles.map(({ title, detail }) => (
            <div
              key={title}
              className="w-64 flex flex-col justify-between bg-stone-800/70 border border-white/10 rounded-2xl p-6 text-center"
            >
              <h4 className="text-2xl font-bold text-white mb-4">{title}</h4>
              <p className="text-xs text-stone-400 mt-auto">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-6 text-center">
        <p className="text-white mb-4">
          Engagement : Répétitions hebdomadaires à Offemont + dates de concerts
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 my-3 border-2 border-white text-white transition-transform transform hover:scale-110 cursor-pointer bg-white/10 hover:bg-red-400/10 hover:border-red-400"
        >
          Je postule
        </a>
      </div>
    </section>
  );
};

export default Recruitment;
