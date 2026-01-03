import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Stethoscope: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m9.75 5.25 1.8-1.35a.75.75 0 0 1 1.2.6v6c0 2.9-2.35 5.25-5.25 5.25M5.25 5.25 3.45 3.9a.75.75 0 0 0-1.2.6v6c0 2.9 2.35 5.25 5.25 5.25m0 0c-.75 4.5 10.5 9 12-4.5m0 0a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Stethoscope.displayName = 'Stethoscope';
