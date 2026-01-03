import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const H2: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M2.25 20.25V12m0 0V3.75m0 8.25h10.5m0 8.25V12m0 0V3.75m9 16.5h-4.5l3.879-3.879a2.121 2.121 0 0 0-1.5-3.621H19.5A2.25 2.25 0 0 0 17.25 15"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
H2.displayName = 'H2';
