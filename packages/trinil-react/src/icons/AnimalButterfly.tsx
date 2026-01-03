import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const AnimalButterfly: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M10.5 9v3.75m0-3.75a1.5 1.5 0 0 1 3 0m-3 0v-.75m0 4.5v3m0-3H8.25m2.25 3a1.5 1.5 0 0 0 3 0m-3 0a4.5 4.5 0 0 1-4.5 4.5H3.75v-3a4.5 4.5 0 0 1 4.5-4.5m5.25 3v-3m0 3a4.5 4.5 0 0 0 4.5 4.5h2.25v-3a4.5 4.5 0 0 0-4.5-4.5m-2.25 0V9m0 3.75h2.25M13.5 9v-.75m2.25 4.5h1.5a4.5 4.5 0 0 0 4.5-4.5v-4.5H18a4.5 4.5 0 0 0-4.5 4.5m0 0v-4.5m-5.25 9h-1.5a4.5 4.5 0 0 1-4.5-4.5v-4.5H6a4.5 4.5 0 0 1 4.5 4.5m0 0v-4.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
AnimalButterfly.displayName = 'AnimalButterfly';
