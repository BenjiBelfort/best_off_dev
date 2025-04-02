import { Link, useNavigate } from 'react-router-dom';

const AnchorLink = ({ to, children, ...props }) => {
  const navigate = useNavigate();
  
  const handleClick = (e) => {
    if (window.location.pathname !== '/') {
      e.preventDefault();
      navigate('/', { 
        state: { scrollTo: to },
        replace: false
      });
    } else {
      // Scroll immédiat si déjà sur la homepage
      const element = document.getElementById(to);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState({}, '', `#${to}`);
      }
    }
  };

  return (
    <Link
      to={window.location.pathname === '/' ? `#${to}` : '/'}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
};

export default AnchorLink;