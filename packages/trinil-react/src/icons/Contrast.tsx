import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Contrast: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M19.036 5.25a9.72 9.72 0 0 0-7.036-3c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75a9.72 9.72 0 0 0 7.036-3m0-13.5H12m7.036 0a9.73 9.73 0 0 1 2.453 4.5m0 0c.17.722.261 1.476.261 2.25s-.09 1.528-.26 2.25m0-4.5H12m9.49 4.5H12m9.49 0a9.73 9.73 0 0 1-2.454 4.5m0 0H12"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Contrast.displayName = 'Contrast';
