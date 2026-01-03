import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Triangle: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="m2.66 18.787 8.018-14.84c.567-1.05 2.074-1.05 2.64.002l7.991 14.84A1.5 1.5 0 0 1 19.99 21H3.979a1.5 1.5 0 0 1-1.32-2.213"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Triangle.displayName = 'Triangle';
