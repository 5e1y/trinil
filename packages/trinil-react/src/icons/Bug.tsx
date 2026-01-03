import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Bug: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M8.25 8.25V7.5c0-1.036.42-1.973 1.098-2.652M8.25 8.25h7.5m-7.5 0a1.5 1.5 0 0 0-1.5 1.5m9-1.5V7.5c0-1.036-.42-1.973-1.098-2.652M15.75 8.25a1.5 1.5 0 0 1 1.5 1.5m-2.598-4.902L17.25 2.25m-2.598 2.598A3.74 3.74 0 0 0 12 3.75c-1.036 0-1.973.42-2.652 1.098m0 0L6.75 2.25m10.5 13.5v.75a5.25 5.25 0 1 1-10.5 0v-.75m10.5 0V13.5m0 2.25c1.839.92 3 2.799 3 4.854v1.146m-3-8.25V9.75m0 3.75a4.43 4.43 0 0 0 4.114-2.785l.386-.965m-4.5 0a5.05 5.05 0 0 0 2.25-4.204V5.25M2.25 9.75l.386.965A4.43 4.43 0 0 0 6.75 13.5m0-3.75v3.75m0-3.75A5.05 5.05 0 0 1 4.5 5.546V5.25m2.25 8.25v2.25m0 0c-1.839.92-3 2.799-3 4.854v1.146"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Bug.displayName = 'Bug';
