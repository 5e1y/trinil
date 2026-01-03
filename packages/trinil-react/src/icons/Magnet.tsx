import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Magnet: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M3 15v4.5A1.5 1.5 0 0 0 4.5 21h4.125c.621 0 1.125-.504 1.125-1.125V15M3 15v-3a9 9 0 0 1 18 0v3M3 15h6.75m0 0v-3a2.25 2.25 0 0 1 4.5 0v3m0 0v4.875c0 .621.504 1.125 1.125 1.125H19.5a1.5 1.5 0 0 0 1.5-1.5V15m-6.75 0H21"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Magnet.displayName = 'Magnet';
