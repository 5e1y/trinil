import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Laptop: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M20 18V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10m16 0h2m-2 0H4m0 0H1.732M7.5 15.5h9"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Laptop.displayName = 'Laptop';
