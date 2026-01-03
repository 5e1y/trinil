import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Cable: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M6 8.25v6c0 1.535.698 3.07 2.451 3.89M6 8.25A2.25 2.25 0 0 1 3.75 6V2.25h4.5V6A2.25 2.25 0 0 1 6 8.25m12 3v6s0 4.5-5.25 4.5c-2.366 0-3.799-1.632-4.299-3.61M18 11.25A2.25 2.25 0 0 0 20.25 9V5.25h-4.5V9A2.25 2.25 0 0 0 18 11.25m-9.549 6.89a6.7 6.7 0 0 1-.201-1.64c0-3 1.511-4.5 3.375-4.5a3.375 3.375 0 1 1 0 6.75c-1.311 0-2.357-.227-3.174-.61"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Cable.displayName = 'Cable';
