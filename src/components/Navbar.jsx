import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AnimatedLink from "../components/ui/AnimatedLink";
import AnchorLink from '../components/ui/AnchorLink';
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // 1. Scroll + détection de section
  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = ["actuality", "biographie", "partners", "contact"];
      let found = null;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          if (top <= 100 && bottom >= 100) {
            found = id;
            break;
          }
        }
      }
      setCurrentSection(found);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  // 2. Bloquer scroll quand menu mobile ouvert
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  const handleHomeClick = (e) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.replaceState({}, '', '/');
    }
    setIsOpen(false);
  };
  const handleMobileLinkClick = () => setIsOpen(false);

  // 3. Fonctions utilitaires
  const navBgClass = isHome && !scrolled ? 'bg-transparent' : 'bg-stone-950/85';
  const isPageActive = (path) => (
    location.pathname === path ||
    location.pathname.startsWith(path.endsWith('/') ? path : path + '/')
  );
  const isSectionActive = (section) => isHome && currentSection === section;

  // 4. Classes pour le bouton Contact
  const contactBaseClass = `
    text-lg rounded-full border bg-white/10
    px-4 py-2 transition-all duration-300
    hover:border-red-400 hover:bg-red-400/10 hover:drop-shadow-[0_0_6px_#f87171]
  `;
  const contactActiveClass = `
    border-red-400 bg-red-400/10 drop-shadow-[0_0_6px_#f87171]
  `;

  const activeUnderlineClass = `
    relative after:absolute after:left-1/2 after:bottom-0
    after:transform after:-translate-x-1/2 after:origin-center
    after:h-[2px] after:w-full after:bg-red-400
  `;

  return (
    <nav className={`${navBgClass} text-white px-6 py-4 sticky top-0 z-50 transition-colors duration-1000`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Home */}
        <Link
          to="/"
          onClick={handleHomeClick}
          className="hover:drop-shadow-[0_0_8px_white] transition-colors"
        >
          <h1 className="text-4xl relative z-60">BEST OFF'</h1>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex space-x-6 items-center">
          {/* Scroll vers “Actualités” */}
          <AnimatedLink
            to="actuality"
            offset={25}
            className={isSectionActive('actuality') ? activeUnderlineClass : ''}
          >
            Actualités
          </AnimatedLink>

          {/* Pages Archives / Galerie / Presse */}
          <AnimatedLink
            to="/archives"
            className={isPageActive('/archives') ? activeUnderlineClass : ''}
          >
            Archives
          </AnimatedLink>

          <AnimatedLink
            to="biographie"
            offset={41}
            className={isSectionActive('biographie') ? activeUnderlineClass : ''}
          >
            Biographie
          </AnimatedLink>


          <AnimatedLink
            to="/galerie"
            className={isPageActive('/galerie') ? activeUnderlineClass : ''}
          >
            Galerie
          </AnimatedLink>
          <AnimatedLink
            to="/presse"
            className={isPageActive('/presse') ? activeUnderlineClass : ''}
          >
            Presse
          </AnimatedLink>

          <AnimatedLink
            to="partners"
            offset={41}
            className={isSectionActive('partners') ? activeUnderlineClass : ''}
          >
            Partenaires
          </AnimatedLink>

          {/* Réseaux */}
          <a href="https://instagram.com/bestoff90300/" target="_blank" rel="noopener noreferrer" aria-label="Visitez notre page Instagram">
            <FaInstagramSquare className="w-6 h-6 hover:scale-110 transition-transform" />
          </a>
          <a href="https://facebook.com/musicbestoff/" target="_blank" rel="noopener noreferrer" aria-label="Suivez-nous sur Facebook">
            <FaFacebookSquare className="w-6 h-6 hover:scale-110 transition-transform" />
          </a>

          {/* Bouton Contact */}
          <AnchorLink
            to="contact"
            offset={41}
            className={`${contactBaseClass} ${isSectionActive('contact') ? contactActiveClass : ''}`}
          >
            Contact
          </AnchorLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col justify-between w-8 h-6 relative z-50 focus:outline-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">{isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
          <span className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
          <span className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0 translate-x-3' : ''}`} />
          <span className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-3' : ''}`} />
        </button>

        {/* Overlay */}
        <div
          className={`fixed inset-0 backdrop-blur-md bg-black/20 transition-opacity duration-300 z-30
            ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 bg-stone-950/50 flex flex-col items-center justify-center space-y-6 text-xl z-40 fade-slide">
            <AnimatedLink to="actuality" offset={25} className={isSectionActive('actuality') ? activeUnderlineClass : ''} onClick={handleMobileLinkClick}>Actualités</AnimatedLink>
            <AnimatedLink to="/archives" className={isPageActive('/archives') ? activeUnderlineClass : ''} onClick={handleMobileLinkClick}>Archives</AnimatedLink>
            <AnimatedLink to="biographie" offset={41} className={isSectionActive('biographie') ? activeUnderlineClass : ''} onClick={handleMobileLinkClick}>Biographie</AnimatedLink>
            <AnimatedLink to="/galerie" className={isPageActive('/galerie') ? activeUnderlineClass : ''} onClick={handleMobileLinkClick}>Galerie</AnimatedLink>
            <AnimatedLink to="/presse" className={isPageActive('/presse') ? activeUnderlineClass : ''} onClick={handleMobileLinkClick}>Presse</AnimatedLink>
            <AnimatedLink to="partners" offset={41} className={isSectionActive('partners') ? activeUnderlineClass : ''} onClick={handleMobileLinkClick}>Partenaires</AnimatedLink>
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/bestoff90300/" target="_blank" rel="noopener noreferrer" aria-label="Visitez notre page Instagram">
                <FaInstagramSquare className="w-8 h-8 hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.facebook.com/musicbestoff/" target="_blank" rel="noopener noreferrer" aria-label="Suivez-nous sur Facebook">
                <FaFacebookSquare className="w-8 h-8 hover:scale-110 transition-transform" />
              </a>
            </div>
            <AnchorLink to="contact" offset={41} className={`${contactBaseClass} ${isSectionActive('contact') ? contactActiveClass : ''}`} onClick={handleMobileLinkClick}>Contact</AnchorLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
