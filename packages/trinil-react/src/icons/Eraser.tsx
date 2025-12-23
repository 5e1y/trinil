import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Eraser: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m15.75 17.75 4.543-4.543a1 1 0 0 0 0-1.414l-6.586-6.586a1 1 0 0 0-1.414 0L7.75 9.75m8 8-1.457 1.457a1 1 0 0 1-.707.293H8.414a1 1 0 0 1-.707-.293l-2.586-2.586a3 3 0 0 1 0-4.242l2.629-2.63m8 8-8-8"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Eraser.displayName = 'Eraser';
