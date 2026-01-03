import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BuildingAlt: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M12 9V6.177a1.5 1.5 0 0 0-.83-1.342l-3-1.5a1.5 1.5 0 0 0-1.34 0l-3 1.5A1.5 1.5 0 0 0 3 6.177V19.5A1.5 1.5 0 0 0 4.5 21h1.35a.15.15 0 0 0 .15-.15V18a1.5 1.5 0 1 1 3 0v2.85c0 .083.067.15.15.15H12m0-12v12m0-12 3.83-1.915a1.5 1.5 0 0 1 1.34 0l3 1.5A1.5 1.5 0 0 1 21 9.927V19.5a1.5 1.5 0 0 1-1.5 1.5h-1.35a.15.15 0 0 1-.15-.15V18a1.5 1.5 0 1 0-3 0v2.85a.15.15 0 0 1-.15.15H12M6 9a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m10.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
BuildingAlt.displayName = 'BuildingAlt';
