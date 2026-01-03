import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Microscope: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M3.75 17.25h4.5m0 0h4.5m-4.5 0v3a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-2.592a9.25 9.25 0 0 0-6-8.658m0 0L12 13.5l-.75-.375-.375.75-3-1.5.375-.75-.75-.375 3.83-7.658a1.5 1.5 0 0 1 2.012-.671l1.816.908a1.5 1.5 0 0 1 .671 2.013z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Microscope.displayName = 'Microscope';
