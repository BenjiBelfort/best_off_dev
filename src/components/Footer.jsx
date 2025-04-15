import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-stone-800 w-full p-4 mt-8">
            <div>
                <h2 className="hidden md:block text-stone-300 text-center container mb-3 mx-auto">
                    BEST OFF' - Quand le <span className='font-special text-2xl'>Rock </span> rencontre la <span className='font-special text-2xl'>Symphonie</span>
                </h2>
            </div>

            <div className="h-px bg-stone-400 mx-auto container"></div>

            <div className="w-full container mx-auto flex flex-col md:flex-row justify-center sm:justify-start items-center md:items-start text-stone-400 text-sm text-center sm:text-left py-4 gap-1">
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
