import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BrightnessHigh: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M12 5.25v-3m0 16.5v3m6.758-9.757h3m-16.5 0h-3m14.528 4.775 2.121 2.121M7.24 7.222 5.119 5.1m2.12 11.677L5.12 18.9M16.786 7.233l2.121-2.122M12 15.75a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
BrightnessHigh.displayName = 'BrightnessHigh';
