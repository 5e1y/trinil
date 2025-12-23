import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const SortAscending: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M5.5 20V5m0 0L3 7.5M5.5 5 8 7.5M10 19h3.5M10 14.5h6M10 10h8.5M10 5.5h11"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
SortAscending.displayName = 'SortAscending';
