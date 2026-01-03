import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const CloudSnowRain: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M15.557 6.084a5.252 5.252 0 0 0-10.203.373m10.203-.373A5 5 0 0 1 16.5 6a5.25 5.25 0 1 1 0 10.5h-9A5.25 5.25 0 0 1 5.354 6.457m10.203-.373a5.2 5.2 0 0 0-1.763.666m-8.44-.293.032-.014A5.2 5.2 0 0 1 7.5 6c.99 0 1.916.274 2.706.75M8.25 19.5l2.25 2.25m-2.25 0 2.25-2.25m8.25 0L21 21.75m-2.25 0L21 19.5m-6.75 0 .75 2.25M3.75 19.5l.75 2.25"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
CloudSnowRain.displayName = 'CloudSnowRain';
