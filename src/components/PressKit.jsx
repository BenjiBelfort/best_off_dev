// src/components/PressKit.jsx
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";

const PressKit = () => {
  return (
    <section
      id="press-kit"
      className="scroll-mt-20 mx-auto max-w-3xl px-4 text-center text-white mb-24"
    >
      <h3>Press kit</h3>

      <p className="mb-6 text-white">
        Retrouvez ici notre dossier de presse complet et nos logos officiels,
        disponibles en téléchargement. Pour toute demande d’information ou
        visuels HD :
      </p>

      <p className="mb-2">
        Contactez-nous par email à{" "}
        <a
          href="mailto:bestoffmusic90@gmail.com?subject=Demande%20d'information%20-%20Presse&body=Bonjour%20BEST%20OFF',%0A%0AJe%20souhaite%20obtenir%20plus%20d'informations%20sur..."
          className="underline decoration-red-400 hover:text-red-400"
        >
          bestoffmusic90@gmail.com
        </a>
      </p>
      <p className="mt-4">Président de l'association :</p>
      <p className="font-bold">Roland CIBIL</p>
      <p>06 77 26 87 32</p>

      <p className="my-4">et retrouvez-nous sur les réseaux sociaux :</p>
      <div className="flex justify-center gap-6 pt-2 mb-8">
        <a
          href="https://www.instagram.com/bestoff90300/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer" />
        </a>
        <a
          href="https://www.facebook.com/musicbestoff/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer" />
        </a>
      </div>

      {/* Boutons de téléchargement */}
      <div className="flex flex-col items-center justify-center gap-4">
        <a
          href="/files/Tryptique6-1.pdf"
          download
          className="flex justify-center items-center w-full max-w-sm gap-2 px-4 py-2 border-2 border-white transition-transform transform hover:scale-110 cursor-pointer bg-white/10 hover:bg-red-400/10 hover:border-red-400"
        >
          <FaFolderOpen className="w-5 h-5" />
          Télécharger le dossier de presse
        </a>


        <a
          href="/files/logos.zip"
          download
          className="flex justify-center items-center w-full max-w-sm gap-2 px-4 py-2 border-2 border-white transition-transform transform hover:scale-110 cursor-pointer bg-white/10 hover:bg-red-400/10 hover:border-red-400"
        >
          <FaFolderOpen className="w-5 h-5" />
          Télécharger les logos
        </a>
      </div>
    </section>
  );
};

export default PressKit;
