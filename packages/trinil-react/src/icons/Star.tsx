import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Star: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M10.63 3.074c.528-1.186 2.211-1.186 2.74 0l2.119 4.752a.15.15 0 0 0 .115.088l4.69.666c1.221.174 1.723 1.665.854 2.54l-3.392 3.425a.15.15 0 0 0-.04.136l1.078 5.212c.265 1.281-1.122 2.264-2.242 1.59l-4.475-2.694a.15.15 0 0 0-.154 0L7.44 21.483c-1.122.674-2.508-.31-2.242-1.592l1.085-5.21a.15.15 0 0 0-.04-.136L2.852 11.12c-.869-.876-.367-2.367.854-2.541l4.69-.666a.15.15 0 0 0 .115-.088z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Star.displayName = 'Star';
