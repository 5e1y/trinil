import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BatteryCharging: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M18.5 14v1a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1m0 4v-4m0 4h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1m-7-.5-1.863 2.336a.1.1 0 0 0 .076.164h2.574a.1.1 0 0 1 .076.164L10.5 14.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
BatteryCharging.displayName = 'BatteryCharging';
