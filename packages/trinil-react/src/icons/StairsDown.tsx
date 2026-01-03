import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const StairsDown: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M20.25 20.25V16.5a.75.75 0 0 0-.75-.75H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75H9A.75.75 0 0 1 8.25 9V4.5a.75.75 0 0 0-.75-.75H3a.75.75 0 0 0-.75.75v15.75M21.75 9 16.5 3.75M21.75 9V5.25m0 3.75H18"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
StairsDown.displayName = 'StairsDown';
