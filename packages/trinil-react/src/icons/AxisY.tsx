import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const AxisY: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m7.5 16.5.75-.75m0 0 1.5.25m-1.5-.25V2.25m-3 16.5.375-.375M3 21l.375-.375M12.75 16.5l.75.125m3 .5.75.125m3 .5.75.125M8.25 2.25l-1.5 1.5m1.5-1.5 1.5 1.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
AxisY.displayName = 'AxisY';
