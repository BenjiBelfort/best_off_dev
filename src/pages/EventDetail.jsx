// src/pages/EventDetail.jsx
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Title, Meta, Link as LinkTag } from 'react-head';
import eventsData from '../data/pastEvents.json';
import partnersData from '../data/partners.json';
import Gallery from '../components/ui/Gallery';
import CardPartner from '../components/ui/CardPartner';
import StickyBackLink from '../components/ui/StickyBackLink';
import Separator from '../components/ui/Separator';
import { MdPlace } from 'react-icons/md';
import { BsCalendarHeartFill } from 'react-icons/bs';
import MdxProvider from '../mdx/MdxProvider';

// MDX liés aux events
const mdxModules = import.meta.glob('../content/events/*.mdx');
const BASE = 'https://bestoffmusic.fr';

const absolutize = (u) => {
  if (!u) return null;
  if (u.startsWith('http://') || u.startsWith('https://')) return u;
  return `${BASE}${u.startsWith('/') ? '' : '/'}${u}`;
};

export default function EventDetail() {
  const { id } = useParams();

  // 🔥 Correction ici : chercher par slug OU par id
  const event = useMemo(
    () => eventsData.find((e) => e.slug === id || e.id === id),
    [id]
  );

  const [MDXContent, setMDXContent] = useState(null);
  const [mdxMeta, setMdxMeta] = useState(null);

  useEffect(() => {
    setMDXContent(null);
    setMdxMeta(null);
    if (!id) return;

    const path = `../content/events/${id}.mdx`;
    const loader = mdxModules[path];
    if (loader) {
      loader()
        .then((mod) => {
          setMDXContent(() => mod.default);
          setMdxMeta(mod.meta || null);
        })
        .catch(() => {
          setMDXContent(null);
          setMdxMeta(null);
        });
    }
  }, [id]);

  if (!event) {
    return <div className="text-white text-center py-8">Événement non trouvé</div>;
  }

// ------- SEO -------
  const slugOrId = event.slug || id;
  const url = `${BASE}/archives/${slugOrId}`;

  // 1) Choix de l'image de partage : mdx > affiche > cover > hero
  const rawImage =
    mdxMeta?.ogImage || event.affiche || event.photo_cover || '/hero.webp';

  // 2) Forcer une URL absolue
  const image = absolutize(rawImage);

  const title =
    (mdxMeta?.seoTitle || event.seoTitle || event.title) + ' | BEST OFF’';

  const description =
    mdxMeta?.seoDescription ||
    event.seoDescription ||
    (Array.isArray(event.description) ? event.description[0] : event.description) ||
    `${event.title} — ${event.lieu} — ${event.date}`;

  return (
    <>
      {/* Head SEO complet */}
      <Title>{title}</Title>
      <Meta name="description" content={description} />
      <LinkTag rel="canonical" href={url} />

      {/* Open Graph */}
      <Meta property="og:title" content={title} />
      <Meta property="og:description" content={description} />
      <Meta property="og:type" content="article" />
      <Meta property="og:url" content={url} />
      <Meta property="og:image" content={image} />
      <Meta property="og:locale" content="fr_FR" />

      {/* Twitter */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={title} />
      <Meta name="twitter:description" content={description} />
      <Meta name="twitter:image" content={image} />

      {/* Contenu */}
      <section className="container mx-auto max-w-2xl px-4 py-8 text-white">
        <StickyBackLink />

        <div className="max-w-2xl mx-auto">
          <h3>{event.title}</h3>

          <img
            src={event.photo_cover || '/placeholder-event.jpg'}
            alt={event.title}
            className="w-100 object-cover mb-6 mx-auto border-4 lg:border-8 border-white cover-shadow"
          />

          <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-yellow-50">
            <p className="text-center flex justify-center items-center gap-2 text-base md:text-xl m-2 md:m-4 px-4 py-1 bg-linear-75 from-slate-500 to-slate-600 w-full md:w-auto text-shadow">
              <BsCalendarHeartFill /> {event.date}
            </p>
            <p className="text-center flex justify-center items-center gap-2 text-base md:text-xl m-2 md:m-4 px-4 py-1 bg-linear-75 from-slate-500 to-slate-600 w-full md:w-auto text-shadow">
              <MdPlace /> {event.lieu}
            </p>
          </div>

          <div className="mt-8">
            <MdxProvider>
              {MDXContent ? (
                <MDXContent />
              ) : Array.isArray(event.description) ? (
                <div className="text-lg">
                  {event.description.map((line, i) => (
                    <p key={i} className="mb-3 hyphens-auto">
                      {line}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-lg hyphens-auto">{event.description}</p>
              )}
            </MdxProvider>
          </div>

          {event.gallery_photos?.length > 0 && (
            <>
              <Separator />
              <div className="mb-8">
                <h4>Galerie photos</h4>
                <Gallery photos={event.gallery_photos} />
              </div>
            </>
          )}

          {event.presse?.length > 0 && (
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
                    Ils nous ont soutenu pour {event.title} et nous les
                    remercions
                  </p>
                  {Object.entries(event.partenaires).map(
                    ([type, partenaires]) => {
                      const partenairesInfos = partenaires
                        .map((pid) => partnersData.find((p) => p.id === pid))
                        .filter(Boolean);

                      return (
                        partenairesInfos.length > 0 && (
                          <div key={type} className="mb-6">
                            <h4 className="text-lg mb-4 capitalize">{type}</h4>
                            <div className="flex flex-wrap gap-4 justify-center">
                              {partenairesInfos.map((partenaire) => (
                                <CardPartner
                                  key={partenaire.id}
                                  partner={partenaire}
                                />
                              ))}
                            </div>
                          </div>
                        )
                      );
                    }
                  )}
                </div>
              </>
            )}
        </div>
      </section>
    </>
  );
}
