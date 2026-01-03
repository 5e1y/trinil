import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ClothTshirt: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M9 3.75H6.75l-4.5 4.5 3 3 1.5-1.5v10.5h10.5V9.75l1.5 1.5 3-3-4.5-4.5H15a3 3 0 1 1-6 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
ClothTshirt.displayName = 'ClothTshirt';
