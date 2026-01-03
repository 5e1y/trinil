import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Crown: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M3.75 18.75h16.5a1.5 1.5 0 0 0 1.5-1.5V9l-3-3.75-3 3.75L12 5.25 8.25 9l-3-3.75-3 3.75v8.25a1.5 1.5 0 0 0 1.5 1.5M6 13.5A.75.75 0 1 1 6 15a.75.75 0 0 1 0-1.5m12 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m-8.25 0a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0" clip-rule="evenodd"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Crown.displayName = 'Crown';
