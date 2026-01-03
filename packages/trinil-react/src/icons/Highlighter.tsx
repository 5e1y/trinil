import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Highlighter: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M20.25 2.25v7.5a3 3 0 0 1-3 3M3.75 2.25v7.5a3 3 0 0 0 3 3m10.5 0v5.355a1.5 1.5 0 0 1-1.088 1.442l-7.5 2.143a1.5 1.5 0 0 1-1.912-1.442V12.75m10.5 0H6.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Highlighter.displayName = 'Highlighter';
