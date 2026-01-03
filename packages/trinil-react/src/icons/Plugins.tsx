import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Plugins: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M17.25 21v-3.75m0 0V13.5m0 3.75H21m-3.75 0H13.5m-5.69-7.06 2.38-2.38a1.5 1.5 0 0 0 0-2.12L7.81 3.31a1.5 1.5 0 0 0-2.12 0L3.31 5.69a1.5 1.5 0 0 0 0 2.12l2.38 2.38a1.5 1.5 0 0 0 2.12 0M10.5 15v4.5A1.5 1.5 0 0 1 9 21H4.5A1.5 1.5 0 0 1 3 19.5V15a1.5 1.5 0 0 1 1.5-1.5H9a1.5 1.5 0 0 1 1.5 1.5M21 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Plugins.displayName = 'Plugins';
