import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const MenuTop: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M2.25 9.75V7.5a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v2.25m-19.5 0v6.75a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3V9.75m-19.5 0h19.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
MenuTop.displayName = 'MenuTop';
