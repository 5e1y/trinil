import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Equalizer: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M16.5 6h1.724c.34 0 .67.116.937.329l1.875 1.5a1.5 1.5 0 0 1 0 2.342l-1.875 1.5a1.5 1.5 0 0 1-.937.329H16.5m0-6h-.75a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h.75m0-6V3.75m0 8.25v8.25M4.5 12h1.724c.34 0 .67.116.937.329l1.875 1.5a1.5 1.5 0 0 1 0 2.342l-1.875 1.5a1.5 1.5 0 0 1-.937.329H4.5m0-6h-.75a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h.75m0-6V3.75M4.5 18v2.25M7.5 9H9M7.5 5.25H9m10.5 13.5H21M19.5 15H21"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Equalizer.displayName = 'Equalizer';
