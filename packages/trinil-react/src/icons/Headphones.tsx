import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Headphones: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M20.049 13.5a2.386 2.386 0 0 1 1.513 3.004l-.973 2.978a2.372 2.372 0 1 1-4.508-1.473l.981-3.005A2.36 2.36 0 0 1 20.05 13.5m0 0C21.456 8.25 18.75 3 12 3S2.544 8.25 3.951 13.5m0 0a2.386 2.386 0 0 0-1.513 3.004l.973 2.978A2.372 2.372 0 0 0 7.92 18.01l-.982-3.005A2.36 2.36 0 0 0 3.95 13.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Headphones.displayName = 'Headphones';
