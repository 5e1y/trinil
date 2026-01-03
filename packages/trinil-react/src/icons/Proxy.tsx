import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Proxy: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M14.25 19.5H21m-6.75 0a2.25 2.25 0 0 1-4.5 0m4.5 0A2.25 2.25 0 0 0 12 17.25M9.75 19.5H3m6.75 0A2.25 2.25 0 0 1 12 17.25m0 0v-4.5m0 0H5.25a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5zM6.75 7.5V9m3.75-1.5V9"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Proxy.displayName = 'Proxy';
