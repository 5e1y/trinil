import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Equalizer: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M5.5 3v10.5m0 0h1.086a1 1 0 0 1 .707.293l1 1a1 1 0 0 1 0 1.414l-1 1a1 1 0 0 1-.707.293H5.5m0-4h-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1m0 0V21M11 5H9m2 3.5H9m2 3.5H9m2 7H9m6.5-16v3.5m0 0h1.086a1 1 0 0 1 .707.293l1 1a1 1 0 0 1 0 1.414l-1 1a1 1 0 0 1-.707.293H15.5m0-4h-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1m0 0V21M21 5h-2m2 7h-2m2 3.5h-2m2 3.5h-2m2-10.5h-2.414M11 15.5H8.586"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Equalizer.displayName = 'Equalizer';
