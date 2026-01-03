import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Gardeing: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M8.625 9.375 11.25 6.75 7.94 3.44A1.5 1.5 0 0 0 6.878 3H3.75a1.5 1.5 0 0 0-1.5 1.5v3.129c0 .398.158.779.44 1.06L6 12zm0 0L12 12.75m0 0 4.5 4.5m-4.5-4.5L3.75 21M12 12.75l4.875-4.875M16.5 17.25h3l1.5 1.5-3 3-1.5-1.5zm.375-9.375L15.75 6.75m1.125 1.125L18 9m3.75.75-1.5 1.5L18 9m-3-6-1.5 1.5 2.25 2.25m0 0 1.5-1.5M18 9l1.5-1.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Gardeing.displayName = 'Gardeing';
