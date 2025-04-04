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
      <p className="text-lg mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      {/* Affichage de la galerie avec toutes les photos */}
      <Gallery photos={allPhotos} />
    </section>
  );
};

export default Galerie;