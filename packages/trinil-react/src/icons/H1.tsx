import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const H1: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M5 4.5V12m0 0v7.5M5 12h9m0 0V4.5m0 7.5v7.5m3.5-4h1.4a.1.1 0 0 1 .1.1v3.9"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
H1.displayName = 'H1';
