// scripts/generate-humans.mjs
import { writeFileSync } from "fs";

const now = new Date();
const day = String(now.getDate()).padStart(2, "0");
const month = String(now.getMonth() + 1).padStart(2, "0");
const year = now.getFullYear();
const formattedDate = `${day}-${month}-${year}`;

const content = `/* ÉQUIPE */
Propriétaire du site : BEST OFF'
Localisation : Belfort, France
Développeur : Benjamin TISSERAND
Contact : bestoffmusic90@gmail.com

/* SITE */
Dernière mise à jour : ${formattedDate}
Langue : Français [fr]
Doctype : HTML5
Framework : React
Style : TailwindCSS
Hébergement : OVH

/* CRÉDITS */
Musique et solidarité
Merci à la communauté open source ♥
Merci aux musiciens engagés
`;

writeFileSync("public/humans.txt", content, "utf8");
console.log("✅ humans.txt mis à jour :", formattedDate);
