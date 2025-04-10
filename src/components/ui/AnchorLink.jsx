// components/ui/AnchorLink.jsx
import { Link, useNavigate } from 'react-router-dom';

const AnchorLink = ({ to, children, className, onClick, offset = 0, ...props }) => {
  const navigate = useNavigate();
  
  const handleClick = (e) => {
    if (window.location.pathname !== '/') {
      // On passe aussi l'offset dans le state
      e.preventDefault();
      navigate('/', { state: { scrollTo: to, offset } });
    } else {
      const element = document.getElementById(to);
      if (element) {
        e.preventDefault();
        const top = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
        window.history.pushState({}, '', `#${to}`);
      }
    }
    onClick?.();
  };

  return (
    <Link
      to={window.location.pathname === '/' ? `#${to}` : '/'}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
};

export default AnchorLink;
