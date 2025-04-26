import AnchorLink from './AnchorLink';
import PageLink from './PageLink';

export default function AnimatedLink({
  to,
  offset = 0,
  className = '',
  children,
  ...props
}) {
  // si to commence par “/”, on considère que c'est une route de page
  const isPageLink = typeof to === 'string' && to.startsWith('/');

  // ta base d’animation “underline” au hover
  const baseAnimationClass = `
    relative
    after:absolute after:left-1/2 after:bottom-0
    after:transform after:-translate-x-1/2 after:origin-center
    after:h-[2px] after:w-0 after:bg-red-400
    after:transition-all after:duration-300
    hover:after:w-full
  `;

  const combinedClass = `${baseAnimationClass} ${className}`.trim();

  if (isPageLink) {
    return (
      <PageLink
        to={to}
        className={combinedClass}
        {...props}
      >
        {children}
      </PageLink>
    );
  }

  return (
    <AnchorLink
      to={to}
      offset={offset}
      className={combinedClass}
      {...props}
    >
      {children}
    </AnchorLink>
  );
}
