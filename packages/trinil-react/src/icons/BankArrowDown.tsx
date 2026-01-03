import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BankArrowDown: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M5.25 17.25h-.329a1.5 1.5 0 0 0-1.455 1.136L3.02 20.17a.668.668 0 0 0 .648.83l8.276-.014M5.25 17.25v-9m0 9h4.5m-4.5-9h-.942a1.308 1.308 0 0 1-.414-2.548l7.632-2.544a1.5 1.5 0 0 1 .948 0l7.632 2.544a1.307 1.307 0 0 1-.414 2.548h-.942m-13.5 0h4.5m0 9v-9m0 9h1.541m-1.541-9h4.5m0 0h4.5m-4.5 0v4.137m4.5-4.137v3.041m0 2.959v8.25m0 0 3.75-3.75m-3.75 3.75L15 18.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
BankArrowDown.displayName = 'BankArrowDown';
