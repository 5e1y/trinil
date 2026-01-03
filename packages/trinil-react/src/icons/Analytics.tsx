import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Analytics: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M9.75 12.75h.75m0 0h3m-3 0V7.5h3V9m0 3.75V9m0 3.75h3M13.5 9h3v3.75m0 0h.75m-9.053 3.053A7.5 7.5 0 1 0 18.804 5.196 7.5 7.5 0 0 0 8.196 15.804m0 0L3 21"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Analytics.displayName = 'Analytics';
