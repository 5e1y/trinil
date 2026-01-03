import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const VolumeMute: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m14.25 8.25 7.5 7.5m-7.5 0 7.5-7.5m-19.5 1.5v4.5a3 3 0 0 0 3 3h1.5l4.5 3V3.75l-4.5 3h-1.5a3 3 0 0 0-3 3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
VolumeMute.displayName = 'VolumeMute';
