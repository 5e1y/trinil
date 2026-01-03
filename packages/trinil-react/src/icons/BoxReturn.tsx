import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BoxReturn: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="m12 12 3.75-2.25M12 12 8.25 9.75M12 12v4.5m3.75-6.75L12 7.5 8.25 9.75m7.5 0v4.5L12 16.5M8.25 9.75v4.5L12 16.5M3 3v4.5m0 0h3.75M3 7.5c1.84-3.221 5.29-5.25 9-5.25 5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
BoxReturn.displayName = 'BoxReturn';
