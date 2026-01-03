import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const MenuRight: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M15.75 4.5h3a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-3m0-15H5.25a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h10.5m0-15v15"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
MenuRight.displayName = 'MenuRight';
