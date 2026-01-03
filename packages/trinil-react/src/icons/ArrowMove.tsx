import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ArrowMove: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="m21.75 12-3-3m3 3-3 3m3-3H15m-3-9.75V9m0-6.75 3 3m-3-3-3 3M2.25 12l3-3m-3 3 3 3m-3-3H9m3 3v6.75m0 0 3-3m-3 3-3-3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
ArrowMove.displayName = 'ArrowMove';
