import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const TreeOak: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 21.75v-6m0 0v-3m0 3a3 3 0 0 0 3-3m-3 0v-1.5m0 1.5H9.75M5.273 7.994a5.25 5.25 0 1 0 6.158 8.236A6.75 6.75 0 1 0 14.22 3.794m-8.947 4.2A5.2 5.2 0 0 1 7.5 7.5m-2.227.494a5.25 5.25 0 0 1 8.946-4.2m0 0A6.72 6.72 0 0 0 10.5 5.47"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
TreeOak.displayName = 'TreeOak';
