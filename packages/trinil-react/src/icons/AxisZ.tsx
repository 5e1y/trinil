import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const AxisZ: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m5.25 18.75.375-.375M3 21l.375-.375M8.25 15.75v-1.492m0 1.492 1.5.25m-1.5-.25-6 6m6-10.492V10.5m0-3v-.75m0-3V3m4.5 13.5.75.125m3 .5.75.125m3 .5.75.125M2.25 21.75v-2.009m0 2.009h1.975"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
AxisZ.displayName = 'AxisZ';
