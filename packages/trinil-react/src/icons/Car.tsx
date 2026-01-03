import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Car: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M19.5 17.25h.75a1.5 1.5 0 0 0 1.5-1.5v-3.573a1.5 1.5 0 0 0-.83-1.342l-1.723-.861a1.5 1.5 0 0 1-.67-.671l-1.612-3.224a1.5 1.5 0 0 0-1.342-.829H6.177a1.5 1.5 0 0 0-1.342.83l-2.427 4.853a1.5 1.5 0 0 0-.158.671v4.146a1.5 1.5 0 0 0 1.5 1.5h.75m15 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0m-10.5 0a2.25 2.25 0 0 1 4.5 0m-4.5 0a2.25 2.25 0 0 0 4.5 0m0 0h6"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Car.displayName = 'Car';
