import { Link } from "react-router-dom";
import AnimatedLink from "../components/ui/AnimatedLink";

const Biographie = () => {
    return (
      <section id="biographie" className="scroll-mt-20 mx-auto max-w-2xl px-4 py-8 text-white">
          <h3>Biographie</h3>
          <h4 className="font-bold text-2xl sm:text-3xl bg-gradient-to-r from-orange-50 via-white to-yellow-50 bg-clip-text text-transparent font-secondary text-left tracking-wide">L’alliance puissante du rock et de la symphonie au service de la musique et de la solidarité</h4>
          <br />
          <p className="hyphens-auto">Fondé il y a dix ans à Offemont, BEST OFF' est bien plus qu’une formation musicale : c’est une expérience immersive où le rock symphonique rencontre les plus grands classiques français et anglo-saxons. Sous la direction passionnée de son fondateur et chef d’orchestre, Roland CIBIL, cet ensemble de 25 musiciens donne vie à des reprises magistrales, mêlant énergie rock et élégance orchestrale.</p>
          <br />
          <h4 className="font-bold text-2xl sm:text-3xl bg-gradient-to-r from-orange-50 via-white to-yellow-50 bg-clip-text text-transparent font-secondary text-left tracking-wide">Une formation riche et éclectique</h4>
          <p className="hyphens-auto">Avec une palette sonore aussi variée que captivante, BEST OFF' réunit des talents complémentaires : violons, cuivres, guitares, basse, batterie, clavier, chanteurs et chanteuses se répondent pour créer des arrangements uniques. Chaque concert est une odyssée musicale, où les tubes intemporels sont réinventés avec puissance et émotion.</p>
          <br />
          <h4 className="font-bold text-2xl sm:text-3xl bg-gradient-to-r from-orange-50 via-white to-yellow-50 bg-clip-text text-transparent font-secondary text-left tracking-wide">La musique au service des autres</h4>
          <p className="hyphens-auto">Au-delà de la scène, BEST OFF' s’engage : depuis ses débuts, le groupe organise des concerts au profit d’associations caritatives, transformant la passion en actions solidaires. Que ce soit pour soutenir des causes locales ou nationales, leur démarche artistique est toujours guidée par l’envie de partager et d’aider.</p>
          <br />
          <h4 className="font-bold text-2xl sm:text-3xl font-secondary text-left tracking-wide bg-gradient-to-r from-orange-50 via-white to-yellow-50 bg-clip-text text-transparent">Une décennie de passion et de partage</h4>
          <p>En dix ans d’existence, BEST OFF' a su conquérir le public par son énergie communicative et son professionnalisme. Que ce soit dans des salles intimistes ou sur de grandes scènes, leur performance transporte les spectateurs, faisant revivre les classiques avec une intensité nouvelle.</p>
          <br />
          <p className="hyphens-auto">Sous l’impulsion de Roland CIBIL, BEST OFF' continue d’écrire son histoire, porté par une ambition simple : faire vibrer les cœurs et rassembler autour de la musique.</p>
          <br />
          <p className="text-center font-primary text-3xl pb-1.5">BEST OFF'</p>
          <p className="text-center">Quand le <span className='font-special text-3xl'>Rock </span> rencontre la <span className='font-special text-3xl'>Symphonie</span>, pour le plaisir des sens</p>
          <img className="mt-5" src="/images/events/chougalante-mars-2025/galerie/chougalante-mars-2025_3.webp" alt="Best off en concert" />
          <div className="flex justify-center w-full pt-4">
            <AnimatedLink 
              to="/archives/chougalante-mars-2025" 
              className="text-white text-shadow transition-transform cursor-pointer flex flex-col sm:flex-row items-center text-center"
            >
              <span className="font-bold">Concert Rock Symphonique</span>
              <span className="hidden sm:inline px-1">-</span>
              <span>16 mars 2025</span>
            </AnimatedLink>
          </div>
      </section>
    );
  };
  
  export default Biographie;