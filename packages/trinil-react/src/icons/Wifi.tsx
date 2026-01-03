import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Wifi: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M22.076 8.674A14.2 14.2 0 0 0 12 4.5 14.2 14.2 0 0 0 1.924 8.674m6.364 6.364A5.23 5.23 0 0 1 12 13.5c1.45 0 2.762.588 3.712 1.538M5.106 11.856A9.72 9.72 0 0 1 12 9a9.72 9.72 0 0 1 6.894 2.856M12.75 18.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Wifi.displayName = 'Wifi';
