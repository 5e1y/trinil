import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LocationCross: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M12.4 14.229A3.747 3.747 0 0 1 8.256 10.5 3.747 3.747 0 0 1 12 6.75a3.747 3.747 0 0 1 3.545 4.96m4.638-.1c.594-4.578-2.785-9.36-8.183-9.36-7.483 0-11.086 9.19-5.602 14.29L12 21.75l.242-.225m3.508.975 3.375-3.375m0 0L22.5 15.75m-3.375 3.375L22.5 22.5m-3.375-3.375L15.75 15.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
LocationCross.displayName = 'LocationCross';
