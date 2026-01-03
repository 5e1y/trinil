import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Receipt: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M7.5 6H12m3 0h1.5m-9 3H12m3 0h1.5m-9 3H12m3 0h1.5m-9-9L6 2.25 4.5 3v18.75L6 21l1.5.75L9 21l1.5.75L12 21l1.5.75L15 21l1.5.75L18 21l1.5.75V3L18 2.25 16.5 3 15 2.25 13.5 3 12 2.25 10.5 3 9 2.25z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Receipt.displayName = 'Receipt';
