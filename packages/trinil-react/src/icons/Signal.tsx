import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Signal: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M14.652 14.651A3.74 3.74 0 0 0 15.75 12c0-1.036-.42-1.973-1.098-2.652m-5.304 5.303A3.74 3.74 0 0 1 8.25 12c0-1.036.42-1.973 1.098-2.652m9.546 9.546A9.72 9.72 0 0 0 21.75 12a9.72 9.72 0 0 0-2.856-6.895m-2.121 11.668A6.73 6.73 0 0 0 18.75 12a6.73 6.73 0 0 0-1.977-4.773M5.106 18.894A9.72 9.72 0 0 1 2.25 12a9.72 9.72 0 0 1 2.856-6.895m2.121 11.668A6.73 6.73 0 0 1 5.25 12c0-1.864.756-3.552 1.977-4.773M11.25 12a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Signal.displayName = 'Signal';
