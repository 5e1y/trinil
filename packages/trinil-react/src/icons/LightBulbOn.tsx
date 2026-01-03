import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LightBulbOn: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M9.75 17.25v1.5a1.5 1.5 0 0 0 1.5 1.5h1.5a1.5 1.5 0 0 0 1.5-1.5v-1.5m-4.5 0h4.5m-4.5 0v-2.073c0-.568-.332-1.073-.79-1.41a5.43 5.43 0 0 1-2.21-4.371V9a5.25 5.25 0 0 1 10.5 0v.396c0 1.743-.835 3.36-2.21 4.37-.458.338-.79.843-.79 1.411v2.073M21 4.5l-1.5.75m2.25 4.5h-1.5m-.75 4.5L21 15M3.75 9.75h-1.5m2.25-4.5L3 4.5m1.5 9.75L3 15"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
LightBulbOn.displayName = 'LightBulbOn';
