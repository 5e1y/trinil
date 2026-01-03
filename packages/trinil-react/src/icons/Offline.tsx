import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Offline: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75M2.25 12c0 5.385 4.365 9.75 9.75 9.75-2.485 0-4.5-4.365-4.5-9.75m-5.25 0H7.5M12 2.25c-2.485 0-4.5 4.365-4.5 9.75M12 2.25c2.395 0 4.353 4.055 4.492 9.169V12H7.5m14.23 0c0-5.385-4.366-9.75-9.75-9.75m3.77 20.25 3.375-3.375m0 0L22.5 15.75m-3.375 3.375L22.5 22.5m-3.375-3.375L15.75 15.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Offline.displayName = 'Offline';
