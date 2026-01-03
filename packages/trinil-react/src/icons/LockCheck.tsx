import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LockCheck: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="m14.25 18.75 2.894 2.894a.15.15 0 0 0 .212 0l4.91-4.91M7.5 9.75H6a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h6.387M7.5 9.75v-3a4.5 4.5 0 0 1 9 0v3m-9 0h9m0 0H18a1.5 1.5 0 0 1 1.5 1.5v.167"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
LockCheck.displayName = 'LockCheck';
