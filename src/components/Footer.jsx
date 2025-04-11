import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-stone-800 w-full p-4 mt-8">
            <div>
                <h2 className="md:flex hidden text-stone-200 container mb-3 mx-auto">BEST OFF' - Quand le rock rencontre la symphonie</h2>
            </div>
            <div className="h-px bg-stone-400 mx-auto container"></div>
            <div className="text-stone-400 text-sm text-center flex flex-col items-center justify-center p-4 gap-1 sm:flex-row">
                <p>&#169; {currentYear} - BEST OFF'.</p>
                <p>Tous droits réservés.</p>
                <a 
                    href="https://benji-belfort-portfolio.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors"
                >
                    Dev by Benji Belfort.
                </a>
            </div>
        </footer>
    );
};

export default Footer;