import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const CameraTarget: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M19.5 18.75v-1.5m0 1.5a.75.75 0 0 1 .75.75m-.75-.75a.75.75 0 0 0-.75.75m1.5 0h1.5m-1.5 0a.75.75 0 0 1-.75.75m0 0v1.5m0-1.5a.75.75 0 0 1-.75-.75m0 0h-1.5m-6-10.5.44-.44a1.5 1.5 0 0 0 0-2.12L8.56 3.31a1.5 1.5 0 0 0-2.12 0L3.31 6.44a1.5 1.5 0 0 0 0 2.12l3.13 3.13a1.5 1.5 0 0 0 2.12 0l.44-.44M11.25 9 15 10.5 10.5 15 9 11.25M11.25 9 9 11.25M15 15l1.5 1.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
CameraTarget.displayName = 'CameraTarget';
