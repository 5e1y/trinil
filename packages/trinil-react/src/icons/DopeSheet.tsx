import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const DopeSheet: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M15.75 18.75 13.5 16.5l-2.25 2.25m4.5 0L13.5 21l-2.25-2.25m4.5 0h6m-10.5 0h-4.5M12 12 9.75 9.75 7.5 12m4.5 0-2.25 2.25L7.5 12m4.5 0h3m-7.5 0h-.75m12.75 0-2.25-2.25L15 12m4.5 0-2.25 2.25L15 12m4.5 0h2.25M13.5 5.25 11.25 3 9 5.25m4.5 0L11.25 7.5 9 5.25m4.5 0h3m-7.5 0H6.75m14.25 0L18.75 3 16.5 5.25m4.5 0L18.75 7.5 16.5 5.25m4.5 0h.75M3 18a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m0-6.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M3 4.5A.75.75 0 1 1 3 6a.75.75 0 0 1 0-1.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
DopeSheet.displayName = 'DopeSheet';
