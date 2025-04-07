const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-stone-950 text-white flex flex-col items-center justify-center gap-1 p-4 sm:flex-row w-full mt-8">
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
        </footer>
    );
};

export default Footer;