import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Browser: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M6.75 12c0-2.9 2.35-5.25 5.25-5.25M6.75 12c0 2.9 2.35 5.25 5.25 5.25M6.75 12h3.375M12 6.75c2.9 0 5.25 2.35 5.25 5.25M12 6.75c-1.036 0-1.875 2.35-1.875 5.25M12 6.75c1.036 0 1.875 2.35 1.875 5.25M12 17.25c2.9 0 5.25-2.35 5.25-5.25M12 17.25c-1.036 0-1.875-2.35-1.875-5.25M12 17.25c1.036 0 1.875-2.35 1.875-5.25m3.375 0h-3.375m0 0h-3.75M5.25 3.75h13.5a3 3 0 0 1 3 3v10.5a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6.75a3 3 0 0 1 3-3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Browser.displayName = 'Browser';
