import eventsData from '../data/pastEvents.json';
import Gallery from '../components/ui/Gallery';

const Galerie = () => {
  // Récupérer toutes les photos de la galerie
  const allPhotos = eventsData
    .filter(event => event.gallery_photos) // Ne garder que les événements avec des photos
    .flatMap(event => event.gallery_photos); // Extraire toutes les photos dans un seul tableau

  return (
    <section className="container mx-auto">
      <h3>Galerie photos</h3>
      {/* Affichage de la galerie avec toutes les photos */}
      <Gallery photos={allPhotos} />
    </section>
  );
};

export default Galerie;