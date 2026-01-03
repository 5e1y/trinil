import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Scan: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M21 7.5v-3A1.5 1.5 0 0 0 19.5 3h-3m-9 0h-3A1.5 1.5 0 0 0 3 4.5v3m0 9v3A1.5 1.5 0 0 0 4.5 21h3m9 0h3a1.5 1.5 0 0 0 1.5-1.5v-3m.75-4.5H2.25"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Scan.displayName = 'Scan';
