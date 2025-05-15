import { useState, useEffect } from "react";

const MentionsLegalesModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"; // Empêche le scroll
        } else {
            document.body.style.overflow = ""; // Réactive le scroll
        }

        // Cleanup automatique au démontage
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen])

    return (
        <>
            {/* Le lien dans le footer ouvrira cette modale */}
            <button 
                onClick={() => setIsOpen(true)}
                className="hover:text-red-400 transition-colors duration-300 cursor-pointer"
            >
                Mentions légales.
            </button>

            {/* Modale */}
            {isOpen && (
                <div className="fixed inset-0 z-50 backdrop-blur-md bg-stone-900/20 flex items-center justify-center">
                    <div className="bg-stone-950 text-white max-w-3xl w-full p-8 relative overflow-y-auto max-h-[90vh]">

                        {/* Bouton de fermeture */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-stone-300 hover:text-white text-5xl cursor-pointer transition-transform transform hover:scale-110"
                        >
                            &times;
                        </button>

                        {/* Contenu de la modale */}
                        <h3>Mentions légales</h3>

                        <p className="mb-2"><strong>Éditeur du site :</strong></p>
                        <p className="mb-4">
                            Association BEST OFF'<br/>
                            Adresse : 28 rue des Eygras - 90300 OFFEMONT<br/>
                            Responsable de la publication : Roland CIBIL<br/>
                            Développement web : Benjamin TISSERAND<br/>
                            Contact : bestoffmusic90@gmail.com<br/>
                            Tél : 06 77 26 87 32
                        </p>

                        <p className="mb-2"><strong>Hébergement :</strong></p>
                        <p className="mb-4">
                            OVH<br/>
                            2 rue Kellermann - 59100 Roubaix - France
                        </p>

                        <p className="mb-2"><strong>Propriété intellectuelle :</strong></p>
                        <p className="mb-4">
                            L'ensemble des contenus présents sur ce site (textes, images, musiques) sont protégés par le droit d’auteur. Toute reproduction ou utilisation sans autorisation préalable est interdite.
                        </p>

                        {/* <p className="mb-2"><strong>Données personnelles :</strong></p>
                        <p className="mb-4">
                            Les informations collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes. Conformément à la réglementation en vigueur, vous disposez d'un droit d’accès, de rectification et de suppression de vos données en nous contactant.
                        </p> */}

                        {/* <p className="mb-2"><strong>Cookies :</strong></p>
                        <p>
                            Ce site utilise des cookies pour améliorer votre expérience et réaliser des statistiques de fréquentation. Vous pouvez accepter ou refuser les cookies en modifiant les paramètres de votre navigateur.
                        </p> */}

                              <img 
                                src="/logo-Best-Off.webp" 
                                alt="Logo Best Off' pour Lightbox" 
                                className="w-20 mx-auto"
                            />
                    </div>
                </div>
            )}
        </>
    );
};

export default MentionsLegalesModal;
