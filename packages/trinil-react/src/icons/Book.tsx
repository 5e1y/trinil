import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Book: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m12 6 .439-.195a10 10 0 0 1 8.122 0A.74.74 0 0 1 21 6.48v12.116a.404.404 0 0 1-.586.362 9.48 9.48 0 0 0-8-.141L12 19m0-13-.439-.195a10 10 0 0 0-8.122 0A.74.74 0 0 0 3 6.48v12.116a.405.405 0 0 0 .586.362 9.48 9.48 0 0 1 8-.141L12 19m0-13v13"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Book.displayName = 'Book';
