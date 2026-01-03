import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const DiningRoom: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 20.25V12m0 0h-1.5m1.5 0h1.5m2.25 8.25v-4.5h6m0 0v-6m0 6v4.5m-13.5 0v-4.5h-6m0 0v-6m0 6v4.5M10.5 12H6m4.5 0-.323-.485A2.59 2.59 0 0 1 10.5 8.25H12M13.5 12H18m-4.5 0 .323-.485A2.59 2.59 0 0 0 13.5 8.25H12m0 0c0-1 .45-3.3 2.25-4.5M12 8.25c0-.75-.45-2.4-2.25-3m4.5-1.5v.75m0-.75H15m-.75 0V3m0 .75h-.75m-3.75 1.5V4.5m0 .75H9m.75 0V6m0-.75h.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
DiningRoom.displayName = 'DiningRoom';
