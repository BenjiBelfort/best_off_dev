// src/pages/MentionsLegales.jsx
import { Title, Meta, Link as LinkTag } from "react-head";

const BASE = "https://bestoffmusic.fr";

export default function MentionsLegales() {
  const url = `${BASE}/mentions-legales`;

  return (
    <>
      {/* === Balises head spécifiques === */}
      <Title>Mentions légales — BEST OFF’</Title>
      <Meta
        name="description"
        content="Mentions légales du site BEST OFF’ : informations sur l’éditeur, l’hébergement, la propriété intellectuelle et la gestion des données."
      />
      <LinkTag rel="canonical" href={url} />

      {/* Open Graph */}
      <Meta property="og:title" content="Mentions légales — BEST OFF’" />
      <Meta
        property="og:description"
        content="Découvrez les mentions légales du site officiel BEST OFF’."
      />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content={url} />
      <Meta property="og:image" content={`${BASE}/hero.webp`} />
      <Meta property="og:locale" content="fr_FR" />

      {/* Twitter */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Mentions légales — BEST OFF’" />
      <Meta
        name="twitter:description"
        content="Mentions légales et informations légales de BEST OFF’."
      />
      <Meta name="twitter:image" content={`${BASE}/hero.webp`} />

      {/* === Contenu === */}
      <section className="max-w-5xl mx-auto px-4 py-12 text-white">
        <h3>Mentions légales</h3>

        <p className="mb-2 font-semibold">Éditeur du site :</p>
        <p className="mb-6">
          <strong>Association BEST OFF’</strong><br />
          Adresse : 28 rue des Eygras — 90300 OFFEMONT<br />
          SIREN : 828 353 052<br />
          Responsable de la publication : Roland CIBIL<br />
          Développement web :{" "}
          <a
            href="https://benji-belfort-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-300 underline"
          >
            Benjamin TISSERAND
          </a>
          <br />
          Contact :{" "}
          <a
            href="mailto:bestoffmusic90@gmail.com"
            className="underline decoration-red-400 hover:text-red-400"
          >
            bestoffmusic90@gmail.com
          </a>
          <br />
          Tél : 06 77 26 87 32
        </p>

        <p className="mb-2 font-semibold">Hébergement :</p>
        <p className="mb-6">
          OVH<br />
          2 rue Kellermann — 59100 Roubaix — France
        </p>

        <p className="mb-2 font-semibold">Propriété intellectuelle :</p>
        <p className="mb-6">
          L’ensemble des contenus présents sur ce site (textes, images,
          photographies, vidéos, musiques) appartiennent au groupe BEST OFF’ et
          sont protégés par le droit d’auteur. Toute reproduction ou
          utilisation sans autorisation préalable est interdite.
        </p>

        <p className="mb-2 font-semibold">Données personnelles :</p>
        <p className="mb-6">
          Ce site n’exploite pas de données personnelles ni de systèmes de
          suivi. Les seules informations éventuellement transmises sont celles
          que vous choisissez de nous communiquer par e-mail. Conformément à la
          réglementation, vous disposez d’un droit d’accès et de rectification
          auprès de la{" "}
          <a
            href="https://www.cnil.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-red-400"
          >
            CNIL
          </a>
          .
        </p>

        <p className="mb-2 font-semibold">Cookies :</p>
        <p className="mb-6">
          Ce site ne dépose pas de cookies à finalité marketing ou de
          traçage. Seuls des cookies techniques indispensables peuvent être
          utilisés pour son bon fonctionnement.
        </p>

        <p className="mb-2 font-semibold">Statut du groupe :</p>
        <p className="mb-6">
          BEST OFF’ est un <strong>groupe amateur</strong>. Nos événements sont
          déclarés auprès de la <strong>CACEM</strong> conformément à la
          réglementation.
        </p>

        <p className="mb-2 font-semibold">Crédits :</p>
        <p className="mb-6">
          Photos et vidéos : BEST OFF’<br />
          Musique et solidarité : merci à tous les musiciens engagés. 
        </p>

        <img
          src="/logo-Best-Off.webp"
          alt="Logo BEST OFF’"
          className="w-20 mx-auto mt-12"
        />
      </section>
    </>
  );
}
