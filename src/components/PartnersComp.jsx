import { Link } from "react-router-dom";

const PartnersComp = () => {
  return (
    <section id="partners" className="scroll-mt-20 mx-auto max-w-3xl px-4 py-8">
      <h3>Nos partenaires</h3>
      
      <p>
        L'ensemble de BEST OFF' tient à exprimer sa profonde gratitude à tous les partenaires qui nous accompagnent. Grâce à leur soutien, nous avons la possibilité de concrétiser nos projets musicaux et solidaires, en mettant la musique au service de grandes causes.
      </p>
      <br />
      <p>
        Leur aide précieuse nous permet d’organiser des concerts au profit d’associations caritatives, de développer des actions locales et de porter plus loin notre engagement en faveur des plus démunis. Chaque partenariat est un moteur pour aller plus loin, plus fort, ensemble.
      </p>
      <br />
      <p>
        Nous croyons au pouvoir de la musique pour rassembler, émouvoir et agir. Et c’est avec le soutien indéfectible de nos partenaires que cette mission prend tout son sens.
      </p>
      <br />
      <p className="font-bold text-center px-8">
        Retrouvez la liste de nos partenaires et les événements auxquels ils ont contribué dans notre page dédiée :
      </p>
      <div className="flex justify-center mt-4">
        <div className="w-0 h-0 border-l-8 border-r-8 border-b-0 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
    </div>
      <div className="flex justify-center mt-4 mb-6">
        <Link 
          to="/archives" 
          className="px-4 py-2 mb-4 border-2 border-white text-white transition-transform transform hover:scale-110 cursor-pointer hover:border-red-300"
        >
          Voir les archives des concerts
        </Link>
      </div>

      <p className="font-bold text-center text-3xl">Merci pour votre engagement à nos côtés.</p>
    </section>
  );
};

export default PartnersComp;
