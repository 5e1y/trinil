import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BoundingBox: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M18.75 16.5v-9m0 9a2.25 2.25 0 0 0-2.25 2.25m2.25-2.25a2.25 2.25 0 1 1-2.25 2.25M18.75 7.5a2.25 2.25 0 0 1-2.25-2.25m2.25 2.25a2.25 2.25 0 1 0-2.25-2.25m0 0h-9m0 0A2.25 2.25 0 0 1 5.25 7.5M7.5 5.25A2.25 2.25 0 1 0 5.25 7.5m0 0v9m0 0a2.25 2.25 0 1 0 2.25 2.25M5.25 16.5a2.25 2.25 0 0 1 2.25 2.25m0 0h9"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
BoundingBox.displayName = 'BoundingBox';
