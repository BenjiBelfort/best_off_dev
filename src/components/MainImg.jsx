import { useState, useEffect } from 'react';

const MainImg = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(false);




  // Affiche le bouton de fermeture 3 secondes après l'ouverture
  useEffect(() => {
    let timer;
    if (isModalOpen) {
      timer = setTimeout(() => setShowCloseButton(true), 3000);
    } else {
      setShowCloseButton(false);
    }
    return () => clearTimeout(timer);
  }, [isModalOpen]);

  // Ferme la modale avec la touche Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isModalOpen]);

  return (
    <div className="relative w-full h-[100vh] bg-stone-900 -mt-20 overflow-hidden">
      <div 
        className="relative w-full h-full"
      >
        <img 
          src="/images/rideau-noir.webp"
          alt="rideaux noirs"
          width="1041"
          height="686"
          loading="eager"
          fetchpriority="high"
          className="w-full h-full object-cover bg-stone-900"
          
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/100 to-transparent" />
      </div>


      <div className="absolute inset-0 flex flex-col items-center justify-center pb-[20px] opacity-0 animate-[fadeIn_3s_ease-out_forwards] z-10">
        <img 
          src="/images/logo-BO.webp" 
          alt="Logo BEST OFF'"
          width="459"
          height="476"
          className="max-w-xs md:max-w-sm lg:max-w-md mt-16 logo-shadow"
        />
        <h2 className="relative text-white text-center text-xl md:text-3xl lg:text-4xl mt-4 mx-12 md:pb-4 gradient-underline">
          Quand le <span className='font-special text-4xl md:text-6xl lg:text-7xl'>Rock </span>
          rencontre la <span className='font-special text-4xl md:text-6xl lg:text-7xl'>Symphonie</span>
        </h2>

          <div className="flex flex-col items-center mt-8 space-y-4 hover:scale-110 transition-transform duration-300 cursor-pointer">
            {/* Triangle dans un cercle */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center"
              aria-label="Lire la vidéo"
            >
              <div className="w-0 h-0 border-l-[24px] border-l-white border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent cursor-pointer" />
            </button>

            {/* Texte dessous */}
            <p className="text-white text-sm md:text-base text-center">
              Découvrez notre univers !
            </p>
          </div>
      </div>

      {/* Modal vidéo */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <video
            src="/videos/intro.mp4"
            controls
            autoPlay
            className="max-h-[90vh] w-[90%] sm:w-auto"
          />

          {/* Bouton de fermeture */}
          {showCloseButton && (
            <button 
              onClick={(e) => { e.stopPropagation(); setIsModalOpen(false); }}
              className="absolute top-5 right-10 md:right-20 text-white text-5xl transition-transform transform hover:scale-110 cursor-pointer text-shadow flex items-center gap-2 animate-[fadeIn_3s_ease-out_forwards]"
              aria-label="Fermer la vidéo"
            >
              ×
              <span className="hidden md:inline text-lg text-white text-shadow">Fermer (échap)</span>
            </button>
          )}

          {/* Logo en bas à droite, visible uniquement sur tablette et plus */}
          <img 
            src="/logo-Best-Off.webp" 
            alt="Logo Best Off' pour Lightbox" 
            className="hidden md:block absolute bottom-3 right-10 w-20"
          />
        </div>
      )}
    </div>
  );
};

export default MainImg;
