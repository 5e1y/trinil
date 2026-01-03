import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Credit: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M3 3v4.5m0 0h4.5M3 7.5c1.84-3.221 5.29-5.25 9-5.25 5.385 0 9.75 4.365 9.75 9.75m-5.25 4.5H21m0 0V21m0-4.5c-1.84 3.221-5.29 5.25-9 5.25-5.385 0-9.75-4.365-9.75-9.75m9-1.5h-1.5m0 0H9m.75 0v-.75a2.25 2.25 0 0 1 4.5 0v.75m-4.5 0v3m1.5 0h-1.5m0 0H9m.75 0v.75a2.25 2.25 0 0 0 4.5 0v-.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Credit.displayName = 'Credit';
