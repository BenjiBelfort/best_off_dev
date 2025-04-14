import eventsData from '../data/pastEvents.json';
import Gallery from '../components/ui/Gallery';

const Galerie = () => {
  // On construit un tableau d'objets { src, event } pour chaque photo
  const allPhotos = eventsData
    .filter(event => event.gallery_photos)
    .flatMap(event => 
      event.gallery_photos.map(photo => ({
        src: photo,
        event: {
          id: event.id,
          title: event.title,
          date: event.date,
          lieu: event.lieu,
        }
      }))
    );

  return (
    <section className="container mx-auto">
      <h3>Galerie photos</h3>
      <Gallery photos={allPhotos} />
    </section>
  );
};

export default Galerie;
