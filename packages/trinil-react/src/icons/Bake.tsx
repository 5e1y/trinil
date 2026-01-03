import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Bake: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 12v6.75M12 12l6-3.333M12 12 6 8.667m6 10.083 6-3.333v-6.75M12 18.75l-6-3.333v-6.75M21 6.75V4.5A1.5 1.5 0 0 0 19.5 3h-2.25M21 17.25v2.25a1.5 1.5 0 0 1-1.5 1.5h-2.25M3 6.75V4.5A1.5 1.5 0 0 1 4.5 3h2.25M3 17.25v2.25A1.5 1.5 0 0 0 4.5 21h2.25M18 8.667l-6-3.334-6 3.334"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Bake.displayName = 'Bake';
