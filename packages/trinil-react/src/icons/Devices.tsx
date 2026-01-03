import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Devices: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M18 11.25v-1.5a1.5 1.5 0 0 0-1.5-1.5H12a1.5 1.5 0 0 0-1.5 1.5v6m7.5-4.5h2.25m-2.25 0a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 0 0 .75 1.3m-6.75-4.3v3a1.5 1.5 0 0 0 1.5 1.5m-1.5-4.5H3.75a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 1 1.5-1.5h15a1.5 1.5 0 0 1 1.5 1.5v6m-15 9H12m0 0h4.5c.273 0 .53-.073.75-.2m3-8.8a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5H18c-.273 0-.53-.073-.75-.2"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Devices.displayName = 'Devices';
