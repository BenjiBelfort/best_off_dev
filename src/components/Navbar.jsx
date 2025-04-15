import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AnchorLink from '../components/ui/AnchorLink';
import PageLink from '../components/ui/PageLink';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  // Scroll detection uniquement sur la page d'accueil
  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // au cas où on arrive déjà scrollé

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  // Empêche le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.replaceState({}, '', '/');
    }
    setIsOpen(false);
  };

  const handleMobileLinkClick = () => {
    setIsOpen(false);
    
  };

  // Détermine la classe de fond selon le contexte
  const navBgClass = isHome && !scrolled ? 'bg-transparent' : 'bg-stone-950/80';

  return (
    <nav className={`${navBgClass} text-white px-6 py-4 sticky top-0 z-50 transition-colors duration-1000`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          onClick={handleHomeClick} 
          className="hover:text-red-300 transition-colors"
        >
          <h1 className="text-4xl relative z-1000">BEST OFF'</h1>
        </Link>

        {/* Liens Desktop */}
        <div className="hidden lg:flex space-x-6 justify-center items-center">
          <AnchorLink to="actuality" offset={25} className="hover:text-red-300 transition-colors">Actualités</AnchorLink>
          <PageLink to="/archives" className="hover:text-red-300 transition-colors">Archives</PageLink>
          <PageLink to="/galerie" className="hover:text-red-300 transition-colors">Galerie</PageLink>
          <AnchorLink to="biographie" offset={41} className="hover:text-red-300 transition-colors">Biographie</AnchorLink>
          <Link to="/presse" className="hover:text-red-300 transition-colors">Presse</Link>
          <AnchorLink to="partners" offset={41} className="hover:text-red-300 transition-colors">Partenaires</AnchorLink>
          {/* <Link to="/auditions" className="hover:text-red-300 transition-colors">Auditions</Link> */}
          <AnchorLink to="contact" offset={41} className="hover:text-red-300 transition-colors rounded-full border-1 bg-white/10 hover:bg-red-300/10 px-4 py-2">Contact</AnchorLink>
        </div>

        {/* Bouton menu mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden focus:outline-none z-50 cursor-pointer"
          aria-label="Menu mobile"
        >
          {isOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Overlay */}
        <div 
          className={`fixed inset-0 bg-black transition-opacity duration-300 z-30
          ${isOpen ? 'opacity-80 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Menu mobile */}
        <div className={`
          lg:hidden fixed top-0 right-0 h-full w-64 md:w-80 bg-stone-800 shadow-lg transform transition-transform duration-300 ease-in-out z-40
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="flex flex-col items-start pt-20 pl-6 space-y-6">
            <AnchorLink to="actuality" offset={25} className="hover:text-red-300 text-lg" onClick={handleMobileLinkClick}>Actualités</AnchorLink>
            <Link to="/archives" className="hover:text-red-300 text-lg" onClick={handleMobileLinkClick}>Archives</Link>
            <Link to="/galerie" className="hover:text-red-300 text-lg" onClick={handleMobileLinkClick}>Galerie</Link>
            <AnchorLink to="biographie" offset={41} className="hover:text-red-300 text-lg" onClick={handleMobileLinkClick}>Biographie</AnchorLink>
            <Link to="/presse" className="hover:text-red-300 text-lg" onClick={handleMobileLinkClick}>Presse</Link>
            <AnchorLink to="partners" offset={41} className="hover:text-red-300 text-lg" onClick={handleMobileLinkClick}>Partenaires</AnchorLink>
            {/* <Link to="/auditions" className="hover:text-red-300 text-lg" onClick={handleMobileLinkClick}>Auditions</Link> */}
            <AnchorLink to="contact" offset={41} className="hover:text-red-300 text-lg rounded-full border-1 bg-white/10 hover:bg-red-300/10 px-4 py-2" onClick={handleMobileLinkClick}>Contact</AnchorLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
