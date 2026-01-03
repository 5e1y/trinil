import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const AirplaneModeOff: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M9.75 9.75H6l-.61-.914A3 3 0 0 0 2.895 7.5H2.25L3 11.25l-.75.75.75.75-.75 3.75h.644a3 3 0 0 0 2.497-1.336L6 14.25h3.75l-2.25 7.5h1.295a3 3 0 0 0 2.578-1.465L14.7 14.7M9.75 9.75l-7.5-7.5m7.5 7.5 4.95 4.95m3.937-.563a4.5 4.5 0 0 0 2.181-1.205L21.75 12l-.932-.932a4.5 4.5 0 0 0-3.182-1.318H15l-3.626-6.043A3 3 0 0 0 8.8 2.25H7.5l.321 1.071M14.7 14.7l7.05 7.05"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
AirplaneModeOff.displayName = 'AirplaneModeOff';
