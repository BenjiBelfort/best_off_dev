// src/components/Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import AnimatedLink from "../components/ui/AnimatedLink";
import AnchorLink from '../components/ui/AnchorLink';
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);
  const [hidden, setHidden] = useState(false);        // ADD
  const lastScrollY = useRef(0);                      // ADD
  const ticking = useRef(false);                      // ADD

  const location = useLocation();
  const isHome = location.pathname === '/';

  const HOVER_REVEAL_PX = 80;
  const hoverRaf = useRef(null);

  // 1. Scroll + détection de section (HOME uniquement — inchangé)
  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = ["actuality", "biographie", "recrutement", "partners", "contact"];
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

  // 1bis. Hide/Show sur TOUTES les pages (indépendant)
  useEffect(() => {
    const updateOnScroll = () => {
      if (isOpen) { setHidden(false); ticking.current = false; return; }
      const y = Math.max(window.scrollY, 0);
      const goingDown = y > lastScrollY.current;
      const delta = Math.abs(y - lastScrollY.current);
      const atTop = y <= 0;
      const THRESHOLD = 8;

      if (atTop) setHidden(false);
      else if (goingDown && delta > THRESHOLD) setHidden(true);
      else if (!goingDown && delta > THRESHOLD) setHidden(false);

      lastScrollY.current = y;
      ticking.current = false;
    };
    const onScroll = () => { if (!ticking.current) { requestAnimationFrame(updateOnScroll); ticking.current = true; } };

    lastScrollY.current = Math.max(window.scrollY || 0, 0);
    updateOnScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isOpen, location.pathname]);

  // 2. Bloquer scroll quand menu mobile ouvert (inchangé)
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

  // nouvel effet : révélation à l’approche du haut de l’écran (desktop uniquement)
  useEffect(() => {
    // Ne déclenche que sur pointeur fin (souris/trackpad)
    const mql = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mql.matches) return;

    const onMove = (e) => {
      if (hoverRaf.current) return;
      hoverRaf.current = requestAnimationFrame(() => {
        // Si la nav est cachée et qu’on approche du haut → on l’affiche
        if (e.clientY <= HOVER_REVEAL_PX && hidden && !isOpen) {
          setHidden(false);
        }
        hoverRaf.current = null;
      });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (hoverRaf.current) cancelAnimationFrame(hoverRaf.current);
    };
  }, [hidden, isOpen]);



  return (
    // CHANGE: on laisse <nav> SANS fond (le fond passe sur le wrapper animé)
    <nav className={`text-white sticky top-0 z-50`}>
      {/* CHANGE: le WRAPPER animé porte le fond + l’anim */}
      <div className={`${navBgClass} relative z-50 px-6 py-4 
                       transform transform-gpu transition-all duration-700 ease-in-out
                       ${hidden ? '-translate-y-full' : 'translate-y-0'} 
                       will-change-transform`}>
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo / Home */}
          <Link
            to="/"
            onClick={handleHomeClick}
            className="hover:drop-shadow-[0_0_8px_white] transition-colors"
          >
            <h1 className="text-4xl">BEST OFF'</h1>
          </Link>

          {/* Desktop */}
          <div className="hidden xl:flex space-x-6 items-center">
            <AnimatedLink to="actuality" className={isSectionActive('actuality') ? activeUnderlineClass : ''}>Actualités</AnimatedLink>
            <AnimatedLink to="/archives" className={isPageActive('/archives') ? activeUnderlineClass : ''}>Archives</AnimatedLink>
            <AnimatedLink to="biographie" className={isSectionActive('biographie') ? activeUnderlineClass : ''}>Biographie</AnimatedLink>
            <AnimatedLink to="/galerie" className={isPageActive('/galerie') ? activeUnderlineClass : ''}>Galerie</AnimatedLink>
            <AnimatedLink to="/presse" className={isPageActive('/presse') ? activeUnderlineClass : ''}>Presse</AnimatedLink>
            <AnimatedLink to="recrutement" className={isSectionActive('recrutement') ? activeUnderlineClass : ''}>Recrutement</AnimatedLink>
            <AnimatedLink to="partners" className={isSectionActive('partners') ? activeUnderlineClass : ''}>Partenaires</AnimatedLink>

            {/* Réseaux */}
            <a href="https://instagram.com/bestoff90300/" target="_blank" rel="noopener noreferrer" aria-label="Visitez notre page Instagram">
              <FaInstagramSquare className="w-6 h-6 hover:scale-110 transition-transform" />
            </a>
            <a href="https://facebook.com/musicbestoff/" target="_blank" rel="noopener noreferrer" aria-label="Suivez-nous sur Facebook">
              <FaFacebookSquare className="w-6 h-6 hover:scale-110 transition-transform" />
            </a>

            {/* Bouton Contact */}
            <AnchorLink to="contact" className={`${contactBaseClass} ${isSectionActive('contact') ? contactActiveClass : ''}`}>
              Contact
            </AnchorLink>
          </div>

          {/* Mobile Hamburger (inchangé) */}
          <button
            className="xl:hidden flex flex-col justify-between w-8 h-6 relative z-50 focus:outline-none cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">{isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
            <span className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0 translate-x-3' : ''}`} />
            <span className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-3' : ''}`} />
          </button>
        </div>
      </div>

      {/* Overlay (inchangé) */}
      <div
        className={`fixed inset-0 backdrop-blur-md bg-black/20 transition-opacity duration-300 z-30
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu (inchangé) */}
      {isOpen && (
        <div className="fixed inset-0 bg-stone-950/50 flex flex-col items-center justify-center space-y-6 text-xl z-40 fade-slide">
          <AnimatedLink to="actuality" className={isSectionActive('actuality') ? activeUnderlineClass : ''} onClick={handleMobileLinkClick}>Actualités</AnimatedLink>
          <AnimatedLink to="/archives" className={isPageActive('/archives') ? activeUnderlineClass : ''} onClick={handleMobileLinkClick}>Archives</AnimatedLink>
          <AnimatedLink to="biographie" className={isSectionActive('biographie') ? activeUnderlineClass : ''} onClick={handleMobileLinkClick}>Biographie</AnimatedLink>
          <AnimatedLink to="/galerie" className={isPageActive('/galerie') ? activeUnderlineClass : ''} onClick={handleMobileLinkClick}>Galerie</AnimatedLink>
          <AnimatedLink to="/presse" className={isPageActive('/presse') ? activeUnderlineClass : ''} onClick={handleMobileLinkClick}>Presse</AnimatedLink>
          <AnimatedLink to="recrutement" className={isSectionActive('recrutement') ? activeUnderlineClass : ''} onClick={handleMobileLinkClick}>Recrutement</AnimatedLink>
          <AnimatedLink to="partners" className={isSectionActive('partners') ? activeUnderlineClass : ''} onClick={handleMobileLinkClick}>Partenaires</AnimatedLink>
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/bestoff90300/" target="_blank" rel="noopener noreferrer" aria-label="Visitez notre page Instagram">
              <FaInstagramSquare className="w-8 h-8 hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.facebook.com/musicbestoff/" target="_blank" rel="noopener noreferrer" aria-label="Suivez-nous sur Facebook">
              <FaFacebookSquare className="w-8 h-8 hover:scale-110 transition-transform" />
            </a>
          </div>
          <AnchorLink to="contact" className={`${contactBaseClass} ${isSectionActive('contact') ? contactActiveClass : ''}`} onClick={handleMobileLinkClick}>Contact</AnchorLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
