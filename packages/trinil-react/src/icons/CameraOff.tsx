import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const CameraOff: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M13.736 9.395a4 4 0 1 1-4.395 6.593m4.395-6.593-4.395 6.593m4.395-6.593 1.978-2.966m-6.373 9.56L7.333 19M13.5 5h-3.382c-.685 0-1.312.387-1.618 1s-.933 1-1.618 1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1M15.714 6.429 18 3m-2.286 3.429.01.018a1 1 0 0 0 .894.553H20a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H7.333M6 21l1.333-2"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
CameraOff.displayName = 'CameraOff';
