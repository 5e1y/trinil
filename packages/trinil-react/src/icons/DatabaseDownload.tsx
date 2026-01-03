import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const DatabaseDownload: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M2.25 7.5c0 2.9 4.365 5.25 9.75 5.25q.966-.001 1.88-.098M2.25 7.5c0-2.9 4.365-5.25 9.75-5.25s9.75 2.35 9.75 5.25m-19.5 0V12m19.5-4.5c0 1.49-1.153 2.835-3.004 3.79M21.75 7.5v4.887M2.25 12v4.5c0 2.9 4.365 5.25 9.75 5.25q.194 0 .384-.004M2.25 12c0 2.771 3.988 5.041 9.043 5.236m7.457-2.986v5.25m0 0L21 17.25m-2.25 2.25-2.25-2.25m-1.5 3V21a1.5 1.5 0 0 0 1.5 1.5H21a1.5 1.5 0 0 0 1.5-1.5v-.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
DatabaseDownload.displayName = 'DatabaseDownload';
