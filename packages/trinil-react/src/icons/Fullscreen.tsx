import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Fullscreen: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M21 15v4.5a1.5 1.5 0 0 1-1.5 1.5H15m6-12V4.5A1.5 1.5 0 0 0 19.5 3H15M9 3H4.5A1.5 1.5 0 0 0 3 4.5V9m0 6v4.5A1.5 1.5 0 0 0 4.5 21H9"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Fullscreen.displayName = 'Fullscreen';
