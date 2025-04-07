import { useParams, Link } from 'react-router-dom';
import eventsData from '../data/pastEvents.json';
import Gallery from '../components/ui/Gallery';
import partnersData from '../data/parteners.json';

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
        
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-2">
          <p className="text-base md:text-xl m-2 md:m-4 px-4 py-1 bg-slate-600 rounded-full w-full md:w-auto text-center">{event.date}</p>
          <p className="text-base md:text-xl m-2 md:m-4 px-4 py-1 bg-slate-600 rounded-full w-full md:w-auto text-center">{event.lieu}</p>
        </div>
        <div className="w-[70%] h-px bg-red-300 mx-auto my-4"></div>
        <p className="text-lg mb-8 mt-8">
          {Array.isArray(event.description)
            ? event.description.map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))
            : event.description}
        </p>
        <div className="w-[70%] h-px bg-red-300 mx-auto my-4"></div>

        {event.gallery_photos && (
          <div className="mb-8">
            <h4>Galerie Photos</h4>
            <Gallery photos={event.gallery_photos} />
          </div>
        )}
        <div className="w-[70%] h-px bg-red-300 mx-auto my-4"></div>
        {event.presse && (
          <div className="mb-8">
            <h4>Presse</h4>
            <Gallery photos={event.presse} />
          </div>
        )}
        <div className="w-[70%] h-px bg-red-300 mx-auto my-4"></div>
        {event.partenaires && (
          <div className="mb-8">
            <h4>Partenaires</h4>
            {Object.entries(event.partenaires).map(([type, partenaires]) => {
              const partenairesInfos = partnersData.filter(p => partenaires.includes(p.id));

              return partenairesInfos.length > 0 && (
                <div key={type} className="mb-6">
                  <h4 className="text-lg mb-4">{type}s</h4>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {partenairesInfos.map((partenaire) => (
                      <div key={partenaire.id} className="flex flex-col items-center w-40">
                        {partenaire.website ? (
                          <a href={partenaire.website} target="_blank" rel="noopener noreferrer">
                            <img
                              src={partenaire.logo}
                              alt={partenaire.name}
                              className="h-28 object-contain mb-2 transition-transform duration-300 hover:scale-105"
                            />
                          </a>
                        ) : (
                          <img
                            src={partenaire.logo}
                            alt={partenaire.name}
                            className="h-28 object-contain mb-2"
                          />
                        )}
                        <span className="text-center text-sm text-white">{partenaire.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default EventDetail;