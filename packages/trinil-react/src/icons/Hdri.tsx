import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Hdri: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M21 16.5c0 2.9-4.029 5.25-9 5.25-4.97 0-9-2.35-9-5.25m18 0c0-2.286-2.503-4.23-5.998-4.951M21 16.5a9 9 0 0 0-18 0m0 0c0-2.286 2.504-4.23 6-4.951m3-7.799v-1.5m5.249 3 .75-1.5M6.75 5.25 6 3.75m-3 4.5-.75-.75M21 8.25l.75-.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Hdri.displayName = 'Hdri';
