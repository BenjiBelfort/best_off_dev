import { useParams } from 'react-router-dom';
import eventsData from '../data/pastEvents.json';
import Gallery from '../components/ui/Gallery';
import partnersData from '../data/partners.json';
import CardPartner from '../components/ui/CardPartner';
import StickyBackLink from '../components/ui/StickyBackLink';
import Separator from '../components/ui/Separator';
import { MdPlace } from "react-icons/md";
import { BsCalendarHeartFill } from "react-icons/bs";

const EventDetail = () => {
  const { id } = useParams();
  const event = eventsData.find((e) => e.id === id);

  if (!event)
    return <div className="text-white text-center py-8">Événement non trouvé</div>;

  return (
    <section className="container mx-auto max-w-2xl px-4 py-8 text-white">
      <StickyBackLink />

      <div className="max-w-2xl mx-auto">
        <h3>{event.title}</h3>
        <img
          src={event.photo_cover || '/placeholder-event.jpg'}
          alt={event.title}
          className="w-100 object-cover mb-6 mx-auto border-4 lg:border-8 border-white"
        />

        <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-yellow-50">
          <p className="text-center flex justify-center items-center gap-2 text-base md:text-xl m-2 md:m-4 px-4 py-1 bg-linear-75 from-slate-500 to-slate-600 w-full md:w-auto text-shadow">
            <BsCalendarHeartFill /> {event.date}
          </p>
          <p className="text-center flex justify-center items-center gap-2 text-base md:text-xl m-2 md:m-4 px-4 py-1 bg-linear-75 from-slate-500 to-slate-600 w-full md:w-auto text-shadow">
            <MdPlace /> {event.lieu}
          </p>
        </div>
        <p className="text-lg mb-8 mt-8 hyphens-auto">
          {Array.isArray(event.description)
            ? event.description.map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))
            : event.description}
        </p>
        
        {event.gallery_photos && event.gallery_photos.length > 0 && (
          <>
            <Separator />
            <div className="mb-8">
              <h4>Galerie Photos</h4>
              {/* Passage de l'objet event pour la lightbox */}
              <Gallery photos={event.gallery_photos} />
            </div>
          </>
        )}

        {event.presse && event.presse.length > 0 && (
          <>
            <Separator />
            <div className="mb-8">
              <h4>Presse</h4>
              <Gallery photos={event.presse} />
            </div>
          </>
        )}

        {event.partenaires &&
          Object.values(event.partenaires).flat().length > 0 && (
            <>
              <Separator />
              <div className="mb-8">
                <h4>Partenaires</h4>
                <p className="text-center pb-4">
                  Ils nous ont soutenu pour {event.title} et nous les remercions
                </p>
                {Object.entries(event.partenaires).map(([type, partenaires]) => {
                    const partenairesInfos = partenaires
                    .map((id) => partnersData.find((p) => p.id === id))
                    .filter(Boolean);

                  return (
                    partenairesInfos.length > 0 && (
                      <div key={type} className="mb-6">
                        <h4 className="text-lg mb-4 capitalize">{type}</h4>
                        <div className="flex flex-wrap gap-4 justify-center">
                          {partenairesInfos.map((partenaire) => (
                            <CardPartner key={partenaire.id} partner={partenaire} />
                          ))}
                        </div>
                      </div>
                    )
                  );
                })}
              </div>
            </>
          )}
      </div>
    </section>
  );
};

export default EventDetail;
