import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Roughness: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M18.894 18.894 12 12m6.894 6.894a9.75 9.75 0 0 0 2.315-3.685m-2.315 3.685a9.75 9.75 0 0 1-3.685 2.315m6-6c.35-1.005.541-2.085.541-3.209 0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12s4.365 9.75 9.75 9.75c1.124 0 2.204-.19 3.21-.54m6-6L15 9m.21 12.21L9 15"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Roughness.displayName = 'Roughness';
