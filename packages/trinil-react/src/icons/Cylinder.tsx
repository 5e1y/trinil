import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Cylinder: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M21 7.5c0-2.9-4.03-5.25-9-5.25S3 4.6 3 7.5m18 0c0 2.9-4.03 5.25-9 5.25S3 10.4 3 7.5m18 0v9c0 2.9-4.03 5.25-9 5.25S3 19.4 3 16.5v-9"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Cylinder.displayName = 'Cylinder';
