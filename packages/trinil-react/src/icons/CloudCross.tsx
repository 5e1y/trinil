import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const CloudCross: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M5.386 10.193a5.25 5.25 0 1 1 10.301-.38m-10.3.38A5.2 5.2 0 0 1 7.5 9.75c.99 0 1.916.274 2.706.75m-4.82-.307A5.251 5.251 0 0 0 7.5 20.25h4.134m4.053-10.438a5.241 5.241 0 0 1 4.97 1.98m-4.97-1.98a5.2 5.2 0 0 0-1.893.688m1.956 12 3.375-3.375m0 0L22.5 15.75m-3.375 3.375L22.5 22.5m-3.375-3.375L15.75 15.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
CloudCross.displayName = 'CloudCross';
