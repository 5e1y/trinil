import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ScaleUniform: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M3 6V4.5A1.5 1.5 0 0 1 4.5 3H6m4.5 0h3M18 3h1.5A1.5 1.5 0 0 1 21 4.5V6m0 4.5v1.452M3 10.5V12m8.25.75 6-6m0 0v4.5m0-4.5h-4.5M16.5 18v-1.125a2.625 2.625 0 0 1 5.25 0V18m-5.25 0h5.25m-5.25 0a.75.75 0 0 0-.75.75V21a1.5 1.5 0 0 0 1.5 1.5H21a1.5 1.5 0 0 0 1.5-1.5v-2.25a.75.75 0 0 0-.75-.75M3 21v-6h6v6z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
ScaleUniform.displayName = 'ScaleUniform';
