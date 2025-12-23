import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Hashtag: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m17 4-1.25 5m0 0-1.5 6m1.5-6h-6m6 0h2.75m-4.25 6L13 20m1.25-5h3.25m-3.25 0h-6M7 20l1.25-5m0 0 1.5-6m-1.5 6H5.5m4.25-6L11 4M9.75 9H6.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Hashtag.displayName = 'Hashtag';
