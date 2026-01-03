import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const CameraRangefinder: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M3 4.5h3m10.5 0h5.25v3.75M16.5 4.5H9v3H3.75A1.5 1.5 0 0 0 2.25 9v9a1.5 1.5 0 0 0 1.5 1.5h16.5a1.5 1.5 0 0 0 1.5-1.5V8.25M16.5 4.5v3.75h5.25M9 13.125a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
CameraRangefinder.displayName = 'CameraRangefinder';
