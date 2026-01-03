import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Crop: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M6 2.25V6m0 0v10.5A1.5 1.5 0 0 0 7.5 18H18M6 6H2.25M6 6h10.5A1.5 1.5 0 0 1 18 7.5V18m0 0h3.75M18 18v3.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Crop.displayName = 'Crop';
