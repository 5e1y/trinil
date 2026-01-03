import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Ruller: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M18.75 20.25h3v-3m-3 3-3-3m3 3h-6m3-3L2.25 3.75v6m13.5 7.5V3.75h6v3m-16.5 13.5h-3v-3m3 3v-1.5m0 1.5H9m0 0v-1.5m0 1.5h3.75m0 0v-1.5m-10.5-9v3.75m0-3.75h1.5m-1.5 3.75v3.75m0-3.75h1.5m-1.5 3.75h1.5m16.5 0h1.5m0 0V13.5m-1.5 0h1.5m0 0V9.75m-1.5 0h1.5m0 0v-3m0 0h-1.5m-13.5 9V13.5L9 15.75z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Ruller.displayName = 'Ruller';
