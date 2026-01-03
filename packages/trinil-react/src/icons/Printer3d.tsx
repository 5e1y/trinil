import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Printer3d: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M3 9.75v9.75A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5V9.75m-18 0V4.5A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5v5.25m-18 0h3.75m0 0v-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v1.5m-4.5 0a1.5 1.5 0 0 0 1.5 1.5H9m0 0h.75a1.5 1.5 0 0 0 1.5-1.5M9 11.25v1.5m2.25-3H21m-5.25 6.75H18m-2.25 0V18m0-1.5h-7.5M6 16.5h2.25m0 0V18"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Printer3d.displayName = 'Printer3d';
