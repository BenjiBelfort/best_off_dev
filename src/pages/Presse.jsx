import eventsData from '../data/pastEvents.json';
import Gallery from '../components/ui/Gallery';

const Presse = () => {
  // Récupérer toutes les photos de la galerie
  const allArticles = eventsData
    .filter(event => event.presse) // Ne garder que les événements avec des photos
    .flatMap(event => event.presse); // Extraire toutes les photos dans un seul tableau

  return (
    <section className="container mx-auto">
      <h3>Presse</h3>
      {/* Affichage de la galerie avec toutes les photos */}
      <Gallery photos={allArticles} />
    </section>
  );
};

export default Presse;