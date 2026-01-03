import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Print3d: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 18.417v3.333m0-3.333 6-3.334m-6 3.334-6-3.334m6 6.667 6-3.333v-3.334m-6 6.667-6-3.333v-3.334m12 0-4.907-2.726A2.13 2.13 0 0 1 12 10.5m-6 4.583L9.75 13M12 6.75h.75a1.5 1.5 0 0 0 1.5-1.5v-1.5a1.5 1.5 0 0 0-1.5-1.5h-1.5a1.5 1.5 0 0 0-1.5 1.5v1.5a1.5 1.5 0 0 0 1.5 1.5zm0 0v1.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Print3d.displayName = 'Print3d';
