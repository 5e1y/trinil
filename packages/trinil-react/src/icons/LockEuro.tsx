import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LockEuro: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M7.5 9.75H6a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h6.387M7.5 9.75v-3a4.5 4.5 0 0 1 9 0v3m-9 0h9m0 0H18a1.5 1.5 0 0 1 1.5 1.5v.167M18 17.25h-2.25m0 0H15m.75 0v-.75c0-1.243 1.126-2.25 2.625-2.25S21 15.257 21 16.5m-5.25.75v2.25m2.25 0h-2.25m0 0H15m.75 0v.75c0 1.243 1.126 2.25 2.625 2.25S21 21.493 21 20.25"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
LockEuro.displayName = 'LockEuro';
