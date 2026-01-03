import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const WindowsLogo: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M3 12V18a1.5 1.5 0 0 0 1.345 1.492l6.905.717M3 12V5.999a1.5 1.5 0 0 1 1.345-1.492l6.905-.717M3 12h8.25M21 12V4.44a1.5 1.5 0 0 0-1.655-1.492l-8.095.84M21 12v7.56a1.5 1.5 0 0 1-1.655 1.492l-8.095-.84M21 12h-9.75m0 0V3.79m0 8.21v8.21"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
WindowsLogo.displayName = 'WindowsLogo';
