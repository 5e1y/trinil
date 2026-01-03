import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Psu: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M14.25 16.5v-9a1.5 1.5 0 0 0-1.5-1.5h-9a1.5 1.5 0 0 0-1.5 1.5V18a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5zm0 0c3.75 2.25 7.5 0 7.5-3 0-.843-.244-1.491-.618-2.196m0 0c-1.428-2.689-4.75-1.583-3.671.695.704 1.486 2.695.84 3.67-.695m0 0c1.1-1.732.907-4.595-3.882-6.804m-7.5 5.25-3 3h3l-3 3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Psu.displayName = 'Psu';
