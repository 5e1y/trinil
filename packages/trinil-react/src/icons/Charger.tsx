import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Charger: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M16.5 15H18a1 1 0 0 0 1-1V6a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v8a1 1 0 0 0 1 1h1.5m9 0v4.75a1.25 1.25 0 1 1-2.5 0V15m2.5 0H14m0 0h-4m-2.5 0v4.75a1.25 1.25 0 1 0 2.5 0V15m-2.5 0H10m3-9-1.54 1.848A.703.703 0 0 0 12 9c.596 0 .921.695.54 1.152L11 12"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Charger.displayName = 'Charger';
