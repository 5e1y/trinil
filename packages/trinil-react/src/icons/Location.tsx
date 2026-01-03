import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Location: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M17.602 16.54 12 21.75l-5.602-5.21C.914 11.44 4.517 2.25 12 2.25s11.086 9.19 5.602 14.29"/><path stroke-miterlimit="1.788" d="M8.256 10.5A3.747 3.747 0 0 0 12 14.25a3.747 3.747 0 0 0 3.744-3.75A3.747 3.747 0 0 0 12 6.75a3.747 3.747 0 0 0-3.744 3.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Location.displayName = 'Location';
