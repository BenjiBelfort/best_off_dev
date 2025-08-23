import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import eventsData from '../data/pastEvents.json'
import partnersData from '../data/partners.json'
import Gallery from '../components/ui/Gallery'
import CardPartner from '../components/ui/CardPartner'
import StickyBackLink from '../components/ui/StickyBackLink'
import Separator from '../components/ui/Separator'
import { MdPlace } from "react-icons/md"
import { BsCalendarHeartFill } from "react-icons/bs"
import MdxProvider from '../mdx/MdxProvider'

// Indexe tous les MDX présents sous /content/events (chemin RELATIF à CE fichier)
const mdxModules = import.meta.glob('../content/events/*.mdx')

const EventDetail = () => {
  const { id } = useParams()
  const event = useMemo(() => eventsData.find((e) => e.id === id), [id])

  const [MDXContent, setMDXContent] = useState(null)
  const [mdxMeta, setMdxMeta] = useState(null)

  useEffect(() => {
    setMDXContent(null)
    if (!id) return
    const path = `../content/events/${id}.mdx`
    const loader = mdxModules[path]
    if (loader) {
      loader()
        .then((mod) => {
          setMDXContent(() => mod.default)
          setMdxMeta(mod.meta || null)
        })
        .catch(() => {
          setMDXContent(null)
          setMdxMeta(null)
        })
    }
  }, [id])

  // SEO: maj <title> + meta description depuis le MDX (ou fallback JSON)
  useEffect(() => {
    if (!event) return

    const title = `${mdxMeta?.seoTitle || event.title} | Best Off`
    document.title = title

    if (mdxMeta?.seoDescription) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', mdxMeta.seoDescription)
    }
  }, [mdxMeta, event])

  if (!event) return <div className="text-white text-center py-8">Événement non trouvé</div>

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

        {/* Contenu riche via MDX si dispo, sinon fallback JSON */}
        <div className="mt-8">
          <MdxProvider>
            {MDXContent ? (
              <MDXContent />
            ) : Array.isArray(event.description) ? (
              <div className="text-lg">
                {event.description.map((line, i) => (
                  <p key={i} className="mb-3 hyphens-auto">{line}</p>
                ))}
              </div>
            ) : (
              <p className="text-lg hyphens-auto">{event.description}</p>
            )}
          </MdxProvider>
        </div>

        {event.gallery_photos && event.gallery_photos.length > 0 && (
          <>
            <Separator />
            <div className="mb-8">
              <h4>Galerie Photos</h4>
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

        {event.partenaires && Object.values(event.partenaires).flat().length > 0 && (
          <>
            <Separator />
            <div className="mb-8">
              <h4>Partenaires</h4>
              <p className="text-center pb-4">
                Ils nous ont soutenu pour {event.title} et nous les remercions
              </p>
              {Object.entries(event.partenaires).map(([type, partenaires]) => {
                const partenairesInfos = partenaires
                  .map((pid) => partnersData.find((p) => p.id === pid))
                  .filter(Boolean)

                return partenairesInfos.length > 0 && (
                  <div key={type} className="mb-6">
                    <h4 className="text-lg mb-4 capitalize">{type}</h4>
                    <div className="flex flex-wrap gap-4 justify-center">
                      {partenairesInfos.map((partenaire) => (
                        <CardPartner key={partenaire.id} partner={partenaire} />
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default EventDetail
