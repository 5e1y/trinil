import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ArrowCollapseVertical: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M2.25 12H9m0 0L5.25 8.25M9 12l-3.75 3.75m6.75-12v16.5M21.75 12H15m0 0 3.75-3.75M15 12l3.75 3.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
ArrowCollapseVertical.displayName = 'ArrowCollapseVertical';
