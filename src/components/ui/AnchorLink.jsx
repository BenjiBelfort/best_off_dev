// components/ui/AnchorLink.jsx
import { Link, useNavigate } from 'react-router-dom';

const AnchorLink = ({ to, children, className, onClick, ...props }) => {
  const navigate = useNavigate();
  
  const handleClick = (e) => {
    if (window.location.pathname !== '/') {
      e.preventDefault();
      navigate('/', { state: { scrollTo: to } });
    } else {
      const element = document.getElementById(to);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
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