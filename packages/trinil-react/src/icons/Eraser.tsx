import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Eraser: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m17.25 17.25 4.19-4.19a1.5 1.5 0 0 0 0-2.12l-7.61-7.61a1.5 1.5 0 0 0-2.14.018L7.606 7.606m9.644 9.644-2.56 2.56a1.5 1.5 0 0 1-1.061.44H6.312a1.5 1.5 0 0 1-1.06-.44l-1.685-1.683a4.5 4.5 0 0 1-.055-6.308l4.094-4.214m9.644 9.645L7.606 7.606"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Eraser.displayName = 'Eraser';
