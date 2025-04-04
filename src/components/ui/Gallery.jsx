import { useState, useEffect } from 'react';
import Lightbox from './Lightbox';
import SeeMoreButton from './SeeMoreButton';

const Gallery = ({ photos }) => {
  // Gestion du nombre de colonnes en fonction de la taille de l'écran
  const [columns, setColumns] = useState(3);
  // Affichage initial : 3 lignes
  const [rowsDisplayed, setRowsDisplayed] = useState(3);
  // Gestion de l'état de la lightbox
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Détecte si l'écran est mobile ou non
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 768) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };
    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  // Nombre de photos à afficher dans la grille
  const photosToDisplay = photos.slice(0, rowsDisplayed * columns);

  // Seuil pour afficher le bouton "Afficher plus"
  const threshold = (columns === 2) ? 6 : 9;
  const canShowMore = photos.length > threshold && rowsDisplayed * columns < photos.length;

  const handleShowMore = () => {
    setRowsDisplayed(prev => prev + 3);
  };

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    // Désactivation du scroll en arrière-plan
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  };

  const goToPrev = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  };

  return (
    <div>
      <div className={`grid ${columns === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-4`}>
        {photosToDisplay.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index + 1}`}
            className="w-full h-32 object-cover cursor-pointer"
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {canShowMore && (
        <SeeMoreButton 
          onClick={handleShowMore}
          // Vous pouvez surcharger le style si besoin avec :
          // className="classes-personnalisees"
        />
      )}

      {isLightboxOpen && (
        <Lightbox
          photos={photos}
          currentIndex={currentIndex}
          closeLightbox={closeLightbox}
          goToNext={goToNext}
          goToPrev={goToPrev}
        />
      )}
    </div>
  );
};

export default Gallery;
