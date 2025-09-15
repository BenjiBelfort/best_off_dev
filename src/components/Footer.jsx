// src/components/Footer.jsx
import { Link } from "react-router-dom";
import MentionsLegalesModal from "./ui/MentionsLegalesModal";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // JSON-LD pour le SEO (MusicGroup + WebSite)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MusicGroup",
        "@id": "https://bestoffmusic.fr/#musicgroup",
        "name": "BEST OFF'",
        "url": "https://bestoffmusic.fr/",
        "genre": ["Rock", "Symphonique"],
        "sameAs": [
          "https://www.instagram.com/bestoff90300/",
          "https://www.facebook.com/musicbestoff/"
        ],
        "image": "https://bestoffmusic.fr/images/logo-BO.webp", // ← remplace si besoin
        "logo": "https://bestoffmusic.fr/images/logo-BO.webp",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "booking",
            "url": "https://bestoffmusic.fr/#contact",
            "availableLanguage": ["fr"]
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://bestoffmusic.fr/#website",
        "name": "BEST OFF'",
        "url": "https://bestoffmusic.fr/",
        "inLanguage": "fr-FR",
        "publisher": { "@id": "https://bestoffmusic.fr/#musicgroup" },
        "potentialAction": {
          "@type": "ContactAction",
          "name": "Nous contacter",
          "target": "https://bestoffmusic.fr/#contact"
        }
      },
      {
        "@type": "ContactPage",
        "@id": "https://bestoffmusic.fr/#contact",
        "name": "Contact",
        "url": "https://bestoffmusic.fr/#contact",
        "inLanguage": "fr-FR",
        "isPartOf": { "@id": "https://bestoffmusic.fr/#website" },
        "about": { "@id": "https://bestoffmusic.fr/#musicgroup" }
      }
    ]
  };


  return (
    <footer className="bg-stone-800 text-stone-300 w-full mt-8" role="contentinfo">
      {/* JSON-LD (SEO) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="container mx-auto px-4 py-10">
        {/* Baseline + pitch clair */}
        <div className="text-center mb-6">
          {/* Mobile */}
          <h2 className="md:hidden">
            <span className="block text-lg tracking-wide">BEST OFF'</span>
            <span>
              Quand le <span className="font-special text-3xl">Rock </span>
              rencontre la <span className="font-special text-3xl">Symphonie</span>
            </span>
          </h2>
          {/* Desktop */}
          <h2 className="hidden md:block text-xl">
            BEST OFF' — Quand le <span className="font-special text-3xl">Rock </span>
            rencontre la <span className="font-special text-3xl">Symphonie</span>
          </h2>
        </div>

        <div className="h-px bg-radial from-stone-300/80 to-transparent mx-auto mb-8" />

        {/* Liens organisés pour le maillage interne */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          {/* Navigation du site */}
          <nav aria-label="Navigation secondaire">
            <h4 className="text-stone-100 font-semibold mb-3 text-left">Plan du site</h4>
            <ul className="space-y-2">
              {/* Sections de la home en ancres + pages internes en Link */}
                <li><a href="/#actuality" className="hover:text-red-400 transition-colors duration-300 cursor-pointer">Actualités</a></li>
                <li><Link to="/archives" className="hover:text-red-400 transition-colors duration-300 cursor-pointer">Archives</Link></li>
                <li><a href="/#biographie" className="hover:text-red-400 transition-colors duration-300 cursor-pointer">Biographie</a></li>
                <li><Link to="/galerie" className="hover:text-red-400 transition-colors duration-300 cursor-pointer">Galerie</Link></li>
                <li><Link to="/presse" className="hover:text-red-400 transition-colors duration-300 cursor-pointer">Presse</Link></li>
                <li><a href="/#recrutement" className="hover:text-red-400 transition-colors duration-300 cursor-pointer">Recrutement</a></li>
                <li><a href="/#partners" className="hover:text-red-400 transition-colors duration-300 cursor-pointer">Partenaires</a></li>
                <li><a href="/#contact" className="hover:text-red-400 transition-colors duration-300 cursor-pointer">Contact</a></li>
            </ul>
          </nav>

          {/* Contact / CTA clairs (pas d’infos inventées) */}
          <div>
            <h4 className="text-stone-100 font-semibold mb-3 text-left">Nous rejoindre</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#contact"
                  className="hover:text-red-400 transition-colors duration-300 cursor-pointer"
                >
                  Réserver BEST OFF' (booking)
                </a>
              </li>

              <li><a href="/#recrutement" className="hover:text-red-400 transition-colors duration-300 cursor-pointer">Recrutement</a></li>

              <li>
                <Link
                  to="/presse#press-kit"
                  className="hover:text-red-400 transition-colors duration-300 cursor-pointer"
                >
                  Dossier de presse
                </Link>
              </li>

              <li>
                <a
                  href="https://instagram.com/bestoff90300/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="BEST OFF' sur Instagram"
                  className="hover:text-red-400 transition-colors duration-300 cursor-pointer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/musicbestoff/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="BEST OFF' sur Facebook"
                  className="hover:text-red-400 transition-colors duration-300 cursor-pointer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Légal / crédits / techniques */}
          <div>
            <h4 className="text-stone-100 font-semibold mb-3 text-left">Informations</h4>
            <ul className="space-y-2">
              <li>
                <MentionsLegalesModal />
              </li>

                <li>
                  <a
                    href="https://benji-belfort-portfolio.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-orange-300 transition-colors duration-300 cursor-pointer"
                    aria-label="Site web développé par Benji Belfort"
                  >
                    <span>Dev by Benji Belfort</span>
                    <img
                      src="/images/logo-CPEP.png"
                      alt="Logo CPEP"
                      width={20}
                      height={20}
                      loading="lazy"
                      decoding="async"
                      className="h-5 w-5"
                    />
                  </a>
                </li>


                <details className="mt-2 text-stone-400 text-xs">
                <summary className="hover:text-red-400 transition-colors duration-300 cursor-pointer">
                    Infos techniques
                </summary>
                <ul className="mt-2 space-y-1 pl-4 list-disc">
                    <li>
                        <a
                            href="/sitemap.xml"
                            className="hover:text-red-400 transition-colors duration-300 cursor-pointer"
                        >
                            Plan du site XML
                        </a>
                    </li>
                    <li>
                        <a
                            href="/sitemap-images.xml"
                            className="hover:text-red-400 transition-colors duration-300 cursor-pointer"
                        >
                            Sitemap Images
                        </a>
                    </li>
                    <li>
                        <a
                            href="/robots.txt"
                            className="hover:text-red-400 transition-colors duration-300 cursor-pointer"
                        >
                            robots.txt
                        </a>
                    </li>
                    <li>
                        <a
                            href="/humans.txt"
                            className="hover:text-red-400 transition-colors duration-300 cursor-pointer"
                        >
                            humans.txt ♥
                        </a>
                    </li>
                </ul>
                </details>
            </ul>
          </div>
        </div>

        {/* Bas de page */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-stone-400">
          <p>
            © {currentYear} — BEST OFF'. Tous droits réservés.
          </p>

          {/* « back to top » = UX + petit signal interne */}
          <p>
            <a
              href="#top"
              onClick={(e) => {
                // remonte en douceur si on est sur la home
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  window.history.replaceState({}, "", "/");
                }
              }}
              className="hover:text-red-400 transition-colors duration-300 cursor-pointer"
              aria-label="Retour en haut de page"
            >
              Haut de page ↑
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
