import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Shuffle: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="m21.75 6.75-3-3m3 3-3 3m3-3h-3.293a6.75 6.75 0 0 0-5.477 2.805L11.219 12m7.531 8.25 3-3m0 0-3-3m3 3h-3.293a6.75 6.75 0 0 1-5.477-2.805L11.219 12m0 0-1.76 2.445A6.75 6.75 0 0 1 3.98 17.25H2.25M11.218 12l-1.76-2.445A6.75 6.75 0 0 0 3.98 6.75H2.25"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Shuffle.displayName = 'Shuffle';
