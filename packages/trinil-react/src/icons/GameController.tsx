import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const GameController: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M8.25 9v1.5m0 0V12m0-1.5h-1.5m1.5 0h1.5M15 9v.75m2.25 1.5V12M3.874 8.008l-1.58 7.954c-.262 1.316.676 2.575 2.06 2.764a2.52 2.52 0 0 0 2.079-.664l3.108-2.98c.202-.193.474-.302.759-.302h3.4c.285 0 .558.109.759.302l3.108 2.98a2.52 2.52 0 0 0 2.08.664c1.383-.19 2.32-1.448 2.06-2.764l-1.581-7.954a.99.99 0 0 0-.463-.657C14.974 4.55 9.026 4.55 4.337 7.35a.99.99 0 0 0-.463.657"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
GameController.displayName = 'GameController';
