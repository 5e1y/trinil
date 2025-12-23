import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Gizmo: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M8 3.5v13m0-13L6.5 5M8 3.5 9.5 5M8 16.5l12 2m-12-2-4 4m16-2-.866-1.5M20 18.5l-1.5 1.125M4 20.5v-2m0 2h2"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Gizmo.displayName = 'Gizmo';
