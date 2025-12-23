import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Database: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M20 9c0 2.761-3.582 5-8 5s-8-2.239-8-5m16 0c0-2.761-3.582-5-8-5S4 6.239 4 9m16 0v3M4 9v3m16 0c0 2.761-3.582 5-8 5s-8-2.239-8-5m16 0v3c0 2.761-3.582 5-8 5s-8-2.239-8-5v-3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Database.displayName = 'Database';
