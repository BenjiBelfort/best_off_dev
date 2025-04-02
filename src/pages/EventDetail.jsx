import { useParams } from 'react-router-dom';
import eventsData from '../data/pastEvents.json';
import { Link } from 'react-router-dom';

const EventDetail = () => {
  const { id } = useParams();
  const event = eventsData.find(e => e.id === id);

  if (!event) return <div className="text-white text-center py-8">Événement non trouvé</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/archives" className="text-white hover:text-red-300 mb-4 inline-block">
        ← Retour aux archives
      </Link>

      <div className="max-w-4xl mx-auto">
        <img
          src={event.photo_cover || '/placeholder-event.jpg'}
          alt={event.title}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />
        
        <h1 className="text-4xl font-bold text-white mb-4">{event.title}</h1>
        <p className="text-xl text-gray-300 mb-4">{event.date}</p>
        <p className="text-lg text-gray-400 mb-8">{event.description}</p>

        {event.gallery_photos && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Galerie Photos</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {event.gallery_photos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-32 object-cover rounded"
                />
              ))}
            </div>
          </div>
        )}

        {event.partenaires && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Partenaires</h2>
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
    </div>
  );
};

export default EventDetail;