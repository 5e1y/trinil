import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const CameraOff: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M20.25 20.25H3.75a1.5 1.5 0 0 1-1.5-1.5V7.5A1.5 1.5 0 0 1 3.75 6H6m14.25 14.25-4.715-4.715m4.715 4.715 1.5 1.5m0-4.5V7.5a1.5 1.5 0 0 0-1.5-1.5h-2.379a1.5 1.5 0 0 1-1.06-.44l-1.372-1.37a1.5 1.5 0 0 0-1.06-.44H9.62a1.5 1.5 0 0 0-.994.377M2.25 2.25 6 6m0 0 3.215 3.215m6.32 6.32a4.5 4.5 0 1 1-6.32-6.32m6.32 6.32-6.32-6.32m7.21 2.71a4.5 4.5 0 0 0-3.6-3.6"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
CameraOff.displayName = 'CameraOff';
