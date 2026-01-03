import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Collision: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m18.75 16.5 3 .75m-5.25 1.5.75 3M7.5 5.25l-.75-3M5.25 7.5l-3-.75m11.25 9.375a5.625 5.625 0 1 0-11.25 0 5.625 5.625 0 0 0 11.25 0m8.25-8.25a5.625 5.625 0 1 0-11.25 0 5.625 5.625 0 0 0 11.25 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Collision.displayName = 'Collision';
