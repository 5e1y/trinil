import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Warehouse: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M6 20.25H3.75a1.5 1.5 0 0 1-1.5-1.5V9.21a1.5 1.5 0 0 1 .871-1.362l8.25-3.808a1.5 1.5 0 0 1 1.258 0l8.25 3.808a1.5 1.5 0 0 1 .871 1.362v9.54a1.5 1.5 0 0 1-1.5 1.5H18m-12 0v-4.5m0 4.5h4.5m7.5 0v-9H6v4.5m12 4.5h-3.75M6 15.75h4.5v.75m0 3.75V16.5m0 3.75h3.75M10.5 16.5h3.75v3.75m-4.5-12h4.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Warehouse.displayName = 'Warehouse';
