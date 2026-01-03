import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Road: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M21 3h-6C8.373 3 3 8.373 3 15v6m10.5 0v-6a1.5 1.5 0 0 1 1.5-1.5h6m0-5.25h-1.5m-3.75 0h-1.5M8.25 21v-1.5m0-3.75v-1.5m1.5-3.75.75-.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Road.displayName = 'Road';
