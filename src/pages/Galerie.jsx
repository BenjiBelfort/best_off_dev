import eventsData from '../data/pastEvents.json';
import Gallery from '../components/ui/Gallery';
import LatestEvents from '../components/LatestEvents';
import Separator from '../components/ui/Separator';

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
  
  const shuffledPhotos = [...allPhotos].sort(() => Math.random() - 0.5);

  return (
    <section className="container mx-auto">
      <h3>Galerie photos</h3>
      <Gallery photos={shuffledPhotos} />
      <Separator />
      <LatestEvents />
    </section>
  );
};

export default Galerie;
