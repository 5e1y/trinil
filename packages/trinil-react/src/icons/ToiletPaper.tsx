import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ToiletPaper: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M7.5 15.75c2.071 0 3.75-3.022 3.75-6.75S9.571 2.25 7.5 2.25m0 13.5c-2.071 0-3.75-3.022-3.75-6.75m3.75 6.75h8.25M3.75 9c0-3.728 1.679-6.75 3.75-6.75M3.75 9v11.25a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-4.5M7.5 2.25h9.75C19.321 2.25 21 5.272 21 9s-1.679 6.75-3.75 6.75h-1.5M8.25 9s0-1.5-.75-1.5S6.75 9 6.75 9s0 1.5.75 1.5.75-1.5.75-1.5Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
ToiletPaper.displayName = 'ToiletPaper';
