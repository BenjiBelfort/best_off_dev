import { useParams, Link } from 'react-router-dom';
import eventsData from '../data/pastEvents.json';
import Gallery from '../components/ui/Gallery';

const EventDetail = () => {
  const { id } = useParams();
  const event = eventsData.find(e => e.id === id);

  if (!event) return <div className="text-white text-center py-8">Événement non trouvé</div>;

  return (
    <section className="container mx-auto max-w-2xl px-4 py-8">
      <Link to="/archives" className="text-white hover:text-red-300 mb-4 inline-block">
        ← Retour aux archives
      </Link>

      <div className="max-w-2xl mx-auto">
        <h3>{event.title}</h3>
        <img
          src={event.photo_cover || '/placeholder-event.jpg'}
          alt={event.title}
          className="w-full h-full object-cover mb-6"
        />
        
        
        <p className="text-xl mb-4">{event.date}</p>
        <p className="text-lg mb-8">
          {Array.isArray(event.description)
            ? event.description.map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))
            : event.description}
        </p>

        {event.gallery_photos && (
          <div className="mb-8">
            <h4>Galerie Photos</h4>
            <Gallery photos={event.gallery_photos} />
          </div>
        )}

        {event.partenaires && (
          <div className="mb-8">
            <h4>Partenaires</h4>
            {Object.entries(event.partenaires).map(([type, partenaires]) => (
              partenaires.length > 0 && (
                <div key={type} className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-300 capitalize mb-2">{type}</h3>
                  <div className="flex flex-wrap gap-2">
                    {partenaires.map((partenaire) => (
                      <span 
                        key={partenaire} 
                        className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                      >
                        {partenaire}
                      </span>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default EventDetail;