import { Link } from "react-router-dom";

const Biographie = () => {
    return (
      <section id="biographie" className="scroll-mt-20 mx-auto max-w-2xl px-4 py-8 text-white">
          <h3>Biographie</h3>
          <p>L’alliance puissante du rock et de la symphonie au service de la musique et de la solidarité</p>
          <br />
          <p>Fondé il y a dix ans à Offemont, BEST OFF' est bien plus qu’une formation musicale : c’est une expérience immersive où le rock symphonique rencontre les plus grands classiques français et anglo-saxons. Sous la direction passionnée de son fondateur et chef d’orchestre, Ronald CIBIL, cet ensemble de 25 musiciens donne vie à des reprises magistrales, mêlant énergie rock et élégance orchestrale.</p>
          <br />
          <p className="font-bold pt-2">Une formation riche et éclectique</p>
          <p>Avec une palette sonore aussi variée que captivante, BEST OFF' réunit des talents complémentaires : batterie, guitares, basse, chanteurs et chanteuses, cuivres, clavier et violons se répondent pour créer des arrangements uniques. Chaque concert est une odyssée musicale, où les tubes intemporels sont réinventés avec puissance et émotion.</p>
          <br />
          <p className="font-bold pt-2">La musique au service des autres</p>
          <p>Au-delà de la scène, BEST OFF' s’engage : depuis ses débuts, il organise des concerts au profit d’associations caritatives, transformant la passion en actions solidaires. Que ce soit pour soutenir des causes locales ou nationales, leur démarche artistique est toujours guidée par l’envie de partager et d’aider.</p>
          <br />
          <p className="font-bold pt-2">Une décennie de passion et de partage</p>
          <p>En dix ans d’existence, BEST OFF' a su conquérir le public par son énergie communicative et son professionnalisme. Que ce soit dans des salles intimistes ou sur de grandes scènes, leur performance transporte les spectateurs, faisant revivre les classiques avec une intensité nouvelle.</p>
          <br />
          <p>Sous l’impulsion de Roland CIBIL, BEST OFF' continue d’écrire son histoire, porté par une ambition simple : faire vibrer les cœurs et rassembler autour de la musique.</p>
          <br />
          <p>BEST OFF' – Quand le rock rencontre la symphonie, pour le plaisir des oreilles et le soutien des plus démunis.</p>
          <img className="mt-5" src="/images/events/centenaire/galerie/Centenaire_24.webp" alt="Best off en concert" />
          <Link to="/archives/centenaire" className="text-white text-center text-shadow hover:text-red-400 transition-transform hover:scale-110 cursor-pointer flex justify-center gap-1 mt-4">
            <p className="font-bold">Centenaire</p>
            <p> - 2 novembre 2022</p>
          </Link>
      </section>
    );
  };
  
  export default Biographie;