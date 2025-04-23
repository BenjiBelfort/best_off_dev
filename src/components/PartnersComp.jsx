import { Link } from "react-router-dom";
import PartnersCarousel from "./ui/PartnersCarousel";

const PartnersComp = () => {
  return (
    <section id="partners" className="scroll-mt-20 mx-auto max-w-5xl px-4 py-8 text-white">
      <h3>Nos partenaires</h3>
      <div className="mx-auto max-w-3xl">
        <p className="text-justify">
          L'ensemble de BEST OFF' tient à exprimer sa profonde gratitude à tous les partenaires qui nous accompagnent. Grâce à votre soutien, nous avons la possibilité de concrétiser nos projets musicaux et solidaires, en mettant la musique au service de grandes causes.
        </p>
        <br />
        <p className="text-justify">
          Votre aide précieuse nous permet d’organiser des concerts au profit d’associations caritatives, de développer des actions locales et de porter plus loin notre engagement en faveur des plus démunis. Chaque partenariat est un moteur pour aller plus loin, plus fort, ensemble.
        </p>
        <br />
        <p className="text-justify">
          Nous croyons au pouvoir de la musique pour rassembler, émouvoir et agir. Et c’est avec le soutien indéfectible de nos partenaires que cette mission prend tout son sens.
        </p>
        <br />
        <p className="font-bold text-center px-8">
          Retrouvez la liste de nos partenaires et les événements auxquels ils ont contribué dans les pages dédiées:
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <div className="w-0 h-0 border-l-8 border-r-8 border-b-0 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
    </div>
      <div className="flex flex-col items-center mt-4 mb-6 gap-2">
        <Link 
          to="/archives" 
          className="w-full max-w-sm text-center px-4 py-2 mb-4 border-2 border-white text-white transition-transform transform hover:scale-110 cursor-pointer hover:border-red-400 bg-white/10 hover:bg-red-400/10"
        >
          Voir les archives des concerts
        </Link>

        <a 
          href="https://www.helloasso.com/associations/best-off/formulaires/2/widget?_gl=1%2a1fljjrq%2a_gcl_aw%2aR0NMLjE3NDQ3MzAwMjYuQ2owS0NRandoX2lfQmhDekFSSXNBTmltZW9HYVlOMXZyNlVRT1UxRlAzY0RJdzFNa1l5WmxhYldOd21zeW5CVXFtdTNhWmRLeE9Ra08yNGFBdktNRUFMd193Y0I.%2a_gcl_au%2aMTExOTkxNzY2MS4xNzQxMTc3MDg0"
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full max-w-sm text-center px-4 py-2 mb-4 border-2 border-white text-white transition-transform transform hover:scale-110 cursor-pointer hover:border-red-400 bg-white/10 hover:bg-red-400/10"
        >
          ♥︎ faire un don ♥︎
        </a>
      </div>
      <p className="font-bold text-center text-3xl mb-12">Merci pour votre engagement à nos côtés.</p>
      <PartnersCarousel />
    </section>
  );
};

export default PartnersComp;
