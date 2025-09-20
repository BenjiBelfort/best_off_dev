// scripts/generate-humans.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Lire package.json (version gérée manuellement)
const pkg = JSON.parse(readFileSync(resolve(__dirname, "../package.json"), "utf8"));
const version = pkg.version ?? "0.0.0";

// Date JJ-MM-AAAA
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
Version : ${version}
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

writeFileSync(resolve(__dirname, "../public/humans.txt"), content, "utf8");
console.log("✅ humans.txt mis à jour :", formattedDate, "— v" + version);
