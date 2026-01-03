import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Radar: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0 0v9m2.652-7.098a3.75 3.75 0 1 0-5.303 0m9.545 4.242A9.72 9.72 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.72 9.72 0 0 0 2.856 6.894m11.667-2.121a6.75 6.75 0 1 0-9.546 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Radar.displayName = 'Radar';
