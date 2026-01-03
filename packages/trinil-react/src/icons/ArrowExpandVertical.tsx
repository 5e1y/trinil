import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ArrowExpandVertical: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M2.25 12 6 15.75M2.25 12 6 8.25M2.25 12H9m3-8.25v16.5M21.75 12 18 8.25M21.75 12 18 15.75M21.75 12H15"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
ArrowExpandVertical.displayName = 'ArrowExpandVertical';
