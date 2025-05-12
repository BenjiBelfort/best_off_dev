// Gallery.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Lightbox from './Lightbox';
import SeeMoreButton from './SeeMoreButton';

const Gallery = ({ photos, seeMoreUrl, event }) => {
  const [columns, setColumns] = useState(3);
  const [rowsDisplayed, setRowsDisplayed] = useState(3);
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ajuste le nombre de colonnes selon la largeur de l'écran
  useEffect(() => {
    const updateColumns = () => {
      setColumns(window.innerWidth < 768 ? 2 : 3);
    };
    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  const getPhotoSrc = (photo) =>
    typeof photo === 'object' ? photo.src : photo;

  // Nombre de photos à afficher dans la grille
  const photosToDisplay = photos.slice(0, rowsDisplayed * columns);

  const threshold = columns === 2 ? 6 : 9;
  const canShowMore = photos.length > threshold && rowsDisplayed * columns < photos.length;

  const handleShowMore = () => setRowsDisplayed(prev => prev + 3);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const goToNext = () => setCurrentIndex((currentIndex + 1) % photos.length);
  const goToPrev = () => setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);

  const getFileName = (url) => {
    const filename = url.substring(url.lastIndexOf('/') + 1);
    return filename.split('.')[0];
  };

  return (
    <div>
      <div className={`grid ${columns === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-4`}>
        {photosToDisplay.map((photo, index) => (
          <div key={index} className="relative w-full aspect-square group overflow-hidden">
            <img
              src={getPhotoSrc(photo)}
              alt={`${getFileName(getPhotoSrc(photo))} - BEST OFF' rock symphonique`}
              className="absolute inset-0 w-full h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
              onClick={() => openLightbox(index)}
            />
          </div>
        ))}
      </div>

      {canShowMore && (
        seeMoreUrl ? (
          <Link to={seeMoreUrl}>
            <SeeMoreButton />
          </Link>
        ) : (
          <SeeMoreButton onClick={handleShowMore} />
        )
      )}

      {isLightboxOpen && (
        <Lightbox
          photos={photos}
          currentIndex={currentIndex}
          closeLightbox={closeLightbox}
          goToNext={goToNext}
          goToPrev={goToPrev}
          // Si la photo active est un objet, on envoie ses infos, sinon on vérifie la prop globale event
          event={
            typeof photos[currentIndex] === 'object'
              ? photos[currentIndex].event
              : event || null
          }
        />
      )}
    </div>
  );
};

export default Gallery;
