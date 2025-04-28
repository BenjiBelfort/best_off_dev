import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StickyBackLink = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Déclencher le changement après avoir scrollé 100px.
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Link
      to="/archives"
      className={`sticky top-18 md:top-19 z-30 transition-all duration-300 text-white hover:text-red-400 ${
        isSticky
          ? 'w-8 h-8 flex items-center justify-center bg-red-400/80 text-shadow hover:text-white'
          : 'px-4 py-2'
      }`}
    >
      {isSticky ? '←' : '← Retour aux archives'}
    </Link>
  );
};

export default StickyBackLink;
