import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Bedroom: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M2.25 18.75v1.5m0-1.5h10.5m-10.5 0V15m10.5 3.75v1.5m0-1.5V16.5a1.5 1.5 0 0 0-1.5-1.5h-9m0-3.75V15m15 1.5v3.75h4.5V16.5m-4.5 0h4.5m-4.5 0V12m4.5 4.5V12m-4.5 0V5.25h4.5V12m-4.5 0h4.5m-15-5.25v-3h6v4.5m-6-1.5v4.5h6v-3m-6-1.5c2.25 1.5 3.6 1.5 6 1.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Bedroom.displayName = 'Bedroom';
