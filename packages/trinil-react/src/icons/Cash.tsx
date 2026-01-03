import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Cash: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M21.75 7.5v9a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5v-9A1.5 1.5 0 0 1 3.75 6h16.5a1.5 1.5 0 0 1 1.5 1.5M5.25 12a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0M18 11.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m-6-1.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5" clip-rule="evenodd"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Cash.displayName = 'Cash';
