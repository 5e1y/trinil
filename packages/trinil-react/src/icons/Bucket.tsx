import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Bucket: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M9 12.75s-.153-2.147.025-4.5M9 12.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m.025-4.5c.217-2.85.92-6 2.975-6 2.054 0 2.758 3.15 2.975 6m-5.95 0H5.521a1.5 1.5 0 0 0-1.48 1.747l1.75 10.5a1.5 1.5 0 0 0 1.48 1.253h9.458a1.5 1.5 0 0 0 1.48-1.253l1.75-10.5a1.5 1.5 0 0 0-1.48-1.747h-3.504m-5.95 0h5.95"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Bucket.displayName = 'Bucket';
