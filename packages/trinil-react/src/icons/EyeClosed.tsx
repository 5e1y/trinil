import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const EyeClosed: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M21 8.5c-4.212 6.551-13.788 6.551-18 0m1.5 5-1 1m4.375.5L7.5 16.5m4.5-1V17m4.125-2 .375 1.5m3-3 1 1"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
EyeClosed.displayName = 'EyeClosed';
