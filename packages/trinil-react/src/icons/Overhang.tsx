import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Overhang: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M17.379 3H4.5A1.5 1.5 0 0 0 3 4.5v12.879c0 1.336 1.616 2.005 2.56 1.06L18.44 5.561C19.383 4.616 18.714 3 17.378 3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Overhang.displayName = 'Overhang';
