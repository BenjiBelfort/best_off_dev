import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AnchorLink from '../components/ui/AnchorLink';
import PageLink from '../components/ui/PageLink';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Désactive le scroll quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Nettoyage quand le composant est démonté
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleHomeClick = (e) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      window.history.replaceState({}, '', '/');
    }
    setIsOpen(false);
  };

  const handleMobileLinkClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <nav className="bg-stone-950/80 text-white px-6 py-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          onClick={handleHomeClick} 
          className="hover:text-red-300 transition-colors"
        >
          <h1 className="text-4xl">BEST OFF'</h1>
        </Link>

        {/* Liens de navigation - Desktop */}
        <div className="hidden lg:flex space-x-6">
            <AnchorLink to="actuality" className="hover:text-red-300 transition-colors">Actualités</AnchorLink>
            <PageLink to="/archives" className="hover:text-red-300 transition-colors">Archives</PageLink>
            <PageLink to="/galerie" className="hover:text-red-300 transition-colors">Galerie</PageLink>
            <AnchorLink to="biographie" className="hover:text-red-300 transition-colors">Biographie</AnchorLink>
            <Link to="/presse" className="hover:text-red-300 transition-colors">Presse</Link>
            <Link to="/partenaires" className="hover:text-red-300 transition-colors">Partenaires</Link>
            <Link to="/auditions" className="hover:text-red-300 transition-colors">Auditions</Link>
            <Link to="/contact" className="hover:text-red-300 transition-colors">Contact</Link>
        </div>

        {/* Bouton du menu mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden focus:outline-none z-50"
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

        {/* Overlay avec animation */}
        <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-30
            ${isOpen ? 'opacity-80 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
        />


        {/* Menu mobile - version slide depuis la droite */}
        <div className={`
          lg:hidden fixed top-0 right-0 h-full w-64 bg-gray-950 shadow-lg transform transition-transform duration-300 ease-in-out z-40
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="flex flex-col items-start pt-20 pl-6 space-y-6">
            <AnchorLink 
              to="actuality" 
              className="hover:text-red-300 text-lg"
              onClick={handleMobileLinkClick}
            >
              Actualités
            </AnchorLink>
            <Link 
              to="/archives" 
              className="hover:text-red-300 text-lg"
              onClick={handleMobileLinkClick}
            >
              Archives
            </Link>
            <Link 
              to="/galerie" 
              className="hover:text-red-300 text-lg"
              onClick={handleMobileLinkClick}
            >
              Galerie
            </Link>
            <Link 
              to="/" 
              className="hover:text-red-300 text-lg"
              onClick={handleMobileLinkClick}
            >
              Accueil
            </Link>
            {/* Autres liens */}
            <Link 
              to="/biographie" 
              className="hover:text-red-300 text-lg"
              onClick={handleMobileLinkClick}
            >
              Biographie
            </Link>
            <Link 
              to="/presse" 
              className="hover:text-red-300 text-lg"
              onClick={handleMobileLinkClick}
            >
              Presse
            </Link>
            <Link 
              to="/partenaires" 
              className="hover:text-red-300 text-lg"
              onClick={handleMobileLinkClick}
            >
              Partenaires
            </Link>
            <Link 
              to="/auditions" 
              className="hover:text-red-300 text-lg"
              onClick={handleMobileLinkClick}
            >
              Auditions
            </Link>
            <Link 
              to="/contact" 
              className="hover:text-red-300 text-lg"
              onClick={handleMobileLinkClick}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      
    </nav>
  );
};

export default Navbar;