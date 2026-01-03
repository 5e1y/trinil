import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Hashtag: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m18 2.25-1.385 6m0 0-1.73 7.5m1.73-7.5h3.635m-3.635 0h-7.5m5.77 7.5-1.385 6m1.385-6h3.865m-3.865 0h-7.5m1.73-7.5H5.25m3.865 0 1.385-6m-1.385 6-1.73 7.5m0 0H3.75m3.635 0L6 21.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Hashtag.displayName = 'Hashtag';
