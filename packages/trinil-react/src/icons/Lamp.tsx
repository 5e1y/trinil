import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Lamp: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 2.25v4.5m0 0a6.75 6.75 0 0 0-6.75 6.75c0 .414.336.75.75.75h3.75M12 6.75a6.75 6.75 0 0 1 6.75 6.75.75.75 0 0 1-.75.75h-3.75m-4.5 0V15a2.25 2.25 0 0 0 4.5 0v-.75m-4.5 0h4.5M12 21.75v-1.5m-3.912-1.338L6.75 20.25m9.162-1.338 1.338 1.338"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Lamp.displayName = 'Lamp';
