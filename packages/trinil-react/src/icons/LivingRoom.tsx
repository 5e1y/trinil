import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LivingRoom: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M5.25 20.25V9.75m0 0h3L7.092 6.276A1.5 1.5 0 0 0 5.669 5.25H4.83a1.5 1.5 0 0 0-1.423 1.026L2.25 9.75zm15 4.5a1.5 1.5 0 0 0-1.5 1.5v1.5H12v-1.5a1.5 1.5 0 0 0-1.5-1.5m9.75 0a1.5 1.5 0 0 1 1.5 1.5v4.5H9v-4.5a1.5 1.5 0 0 1 1.5-1.5m9.75 0v-1.5a1.5 1.5 0 0 0-1.5-1.5H12a1.5 1.5 0 0 0-1.5 1.5v1.5m2.25-10.5v4.5h7.5v-4.5z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
LivingRoom.displayName = 'LivingRoom';
