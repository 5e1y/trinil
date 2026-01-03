import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const TrashEmpty: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M18.75 8.25h1.5m-1.5 0-1.352 12.166a1.5 1.5 0 0 1-1.49 1.334H8.092a1.5 1.5 0 0 1-1.491-1.334L5.25 8.25m13.5 0H5.25m-1.5 0h1.5m9.375 3-.75 7.5m-4.5-7.5.75 7.5M6.75 2.25l.656.75m9.844-.75-.656.75m2.7 2.03-.912.403M4.706 5.031l.912.402"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
TrashEmpty.displayName = 'TrashEmpty';
