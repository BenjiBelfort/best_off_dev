// Lightbox.jsx
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Lightbox = ({ photos, currentIndex, closeLightbox, goToNext, goToPrev, event }) => {
  const lightboxRef = useRef();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, closeLightbox]);

  const getFileName = (url) => {
    if (!url) return 'Image';
    const filename = url.substring(url.lastIndexOf('/') + 1);
    const cleanName = filename.split('?')[0];
    return cleanName.lastIndexOf('.') > 0 
      ? cleanName.substring(0, cleanName.lastIndexOf('.')) 
      : cleanName;
  };
  console.log("event dans Lightbox:", event);
  return (
    <div 
      ref={lightboxRef}
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      onClick={closeLightbox}
    >
      {/* Conteneur de l'image */}
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <img 
          src={photos[currentIndex].src || photos[currentIndex]}
          alt={getFileName(photos[currentIndex].src || photos[currentIndex])}
          className="max-w-full max-h-screen mx-auto"
        />
      </div>

      {/* Bouton de fermeture */}
      <button 
        onClick={(e) => { e.stopPropagation(); closeLightbox(); }} 
        className="absolute top-5 right-10 md:right-20 text-white text-5xl transition-transform transform hover:scale-110 cursor-pointer flex items-center gap-2 text-shadow"
      >
        ×
        <span 
          className="hidden md:inline text-lg text-white"
        >
          Fermer (échap)
        </span>
      </button>

      {/* Flèches de navigation */}
      <button 
        onClick={(e) => { e.stopPropagation(); goToPrev(); }}
        className="absolute bottom-5 left-10 transform md:left-20 md:top-1/2 md:-translate-y-1/2 p-4 w-16 h-16 rounded-full text-white text-5xl transition-transform hover:scale-110 cursor-pointer text-shadow"
      >
        ‹
      </button>

      <button 
        onClick={(e) => { e.stopPropagation(); goToNext(); }}
        className="absolute bottom-5 right-10 transform md:right-20 md:top-1/2 md:-translate-y-1/2 p-4 w-16 h-16 rounded-full text-white text-5xl transition-transform hover:scale-110 cursor-pointer text-shadow"
      >
        ›
      </button>

      {/* Compteur d'images */}
      <div className="absolute bottom-7.5 left-1/2 md:bottom-5 transform -translate-x-1/2 text-white text-xs md:text-base text-shadow">
        {currentIndex + 1} / {photos.length}
      </div>

      {/* Informations de l'événement */}
      {event && (
        <Link 
          to={`/archives/${event.id}`} 
          className="absolute top-7 left-5 md:top-auto md:bottom-5 md:left-10 text-white text-xs md:text-base flex flex-col md:flex-row gap-1 text-shadow hover:text-red-300 transition-transform hover:scale-110 cursor-pointer"
        >
          <p className="font-bold">{event.title}</p>
          <p className="hidden md:inline-block">-</p>
          <p>{event.date}</p>
        </Link>
      )}
    </div>
  );
};

export default Lightbox;
