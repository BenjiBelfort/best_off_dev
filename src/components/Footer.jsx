const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white flex flex-col items-center justify-center gap-1 p-4 sm:flex-row w-full mt-auto">
            <p>&#169; {currentYear} - BEST OFF'.</p>
            <p>Tous droits réservés.</p>
            <a 
                href="https://benji-belfort-portfolio.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-orange-200 transition-colors"
            >
                Dev by Benji Belfort.
            </a>
        </footer>
    );
};

export default Footer;