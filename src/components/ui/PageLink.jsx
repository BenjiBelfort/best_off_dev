import { Link } from 'react-router-dom';

const PageLink = ({ to, children, className, onClick, ...props }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    onClick?.();
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
};

export default PageLink;