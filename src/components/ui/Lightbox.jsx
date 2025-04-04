import { useEffect, useRef } from 'react';

const Lightbox = ({ photos, currentIndex, closeLightbox, goToNext, goToPrev }) => {
  const lightboxRef = useRef();

  // Gestion du clavier
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, closeLightbox]);

  // Gestion du swipe tactile
  let touchStartX = null;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) goToNext();
    if (touchStartX - touchEndX < -50) goToPrev();
    touchStartX = null;
  };

  const getFileName = (url) => {
    if (!url) return 'Image';
    // Gère les URLs complètes et les chemins relatifs
    const filename = url.substring(url.lastIndexOf('/') + 1);
    // Supprime les paramètres de requête s'ils existent (ex: ?v=123)
    const cleanName = filename.split('?')[0];
    // Supprime l'extension mais conserve les points dans le nom si besoin
    return cleanName.lastIndexOf('.') > 0 
      ? cleanName.substring(0, cleanName.lastIndexOf('.')) 
      : cleanName;
  };

  return (
    <div 
      ref={lightboxRef}
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      onClick={closeLightbox}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Conteneur image, arrête la propagation pour éviter la fermeture */}
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <img 
          src={photos[currentIndex]} 
          alt={getFileName(photos[currentIndex])}
          className="max-w-full max-h-screen mx-auto"
        />
      </div>

      {/* Bouton de fermeture */}
      <button 
        onClick={(e) => { e.stopPropagation(); closeLightbox(); }} 
        className="absolute top-5 right-10 md:right-20 text-white text-5xl transition-transform transform hover:scale-110 cursor-pointer text-shadow"
      >
        ×
      </button>
      {/* Flèche gauche - Position responsive */}
      <button 
        onClick={(e) => { e.stopPropagation(); goToPrev(); }}
        className="absolute bottom-5 left-10 transform md:left-20 md:top-1/2 md:-translate-y-1/2
                    p-4 w-16 h-16 rounded-full
                    text-white text-5xl transition-transform hover:scale-110 cursor-pointer text-shadow"
      >
        ‹
      </button>

      {/* Flèche droite - Position responsive */}
      <button 
        onClick={(e) => { e.stopPropagation(); goToNext(); }}
        className="absolute bottom-5 right-10 transform md:right-20 md:top-1/2 md:-translate-y-1/2
                    p-4 w-16 h-16 rounded-full
                    text-white text-5xl transition-transform hover:scale-110 cursor-pointer text-shadow"
      >
        ›
      </button>

      {/* Compteur d'images */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white text-lg bg-opacity-50 text-shadow">
        {currentIndex + 1} / {photos.length}
      </div>
    </div>
  );
};

export default Lightbox;