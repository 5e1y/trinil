import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Bus: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M21.75 11.25v-4.5a1.5 1.5 0 0 0-1.5-1.5h-1.5m0 0v12a1.5 1.5 0 0 1-1.5 1.5h-1.5m3-13.5a1.5 1.5 0 0 0-1.5-1.5h-15m13.5 15v-12h-4.5m4.5 12h-4.5m0-12v12m0-12v6h-9m9-6h-9m9 12H9.622m0 0a2.25 2.25 0 0 1-4.244 0m4.244 0q.126-.354.128-.75a2.25 2.25 0 1 0-4.372.75m0 0H2.25"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Bus.displayName = 'Bus';
