import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Watch: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M17.25 7.757A6.72 6.72 0 0 1 18.75 12a6.72 6.72 0 0 1-1.5 4.243m0-8.486A6.74 6.74 0 0 0 12 5.25c-2.12 0-4.013.978-5.25 2.507m10.5 0V3.75a1.5 1.5 0 0 0-1.5-1.5h-7.5a1.5 1.5 0 0 0-1.5 1.5v4.007m0 0A6.72 6.72 0 0 0 5.25 12c0 1.608.562 3.084 1.5 4.243m0 0A6.74 6.74 0 0 0 12 18.75c2.12 0 4.012-.978 5.25-2.507m-10.5 0v4.007a1.5 1.5 0 0 0 1.5 1.5h7.5a1.5 1.5 0 0 0 1.5-1.5v-4.007m-7.5-4.993 2.25 1.5 3-2.25"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Watch.displayName = 'Watch';
