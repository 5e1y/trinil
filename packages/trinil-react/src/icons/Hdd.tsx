import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Hdd: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M8.543 14.451a5.25 5.25 0 1 1 2.427 1.198m-2.427-1.198-.902 1.03a1.77 1.77 0 0 0 1.888 2.843c.6-.2 1.048-.707 1.172-1.328l.27-1.347m-2.428-1.198 2.534-2.896a.374.374 0 0 1 .648.319l-.755 3.775M5.25 2.25h13.5a1.5 1.5 0 0 1 1.5 1.5v16.5a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V3.75a1.5 1.5 0 0 1 1.5-1.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Hdd.displayName = 'Hdd';
