import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ZoomCamera: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M21.75 3H18m3.75 0v3.75m0-3.75-3 3M2.25 3v3.75m0-3.75 3 3m-3-3H6m15.75 18H18m3.75 0v-3.75m0 3.75-3-3m-16.5 3v-3.75m0 3.75 3-3m-3 3H6M16.5 9.75v-1.5h-2.25M7.5 9.75v-1.5h2.25M7.5 13.5V15h2.25m6.75-1.5V15h-2.25"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
ZoomCamera.displayName = 'ZoomCamera';
