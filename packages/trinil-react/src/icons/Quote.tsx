import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Quote: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M21 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0m0 0v1.5S21 18 14.25 21M10.5 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0m0 0v1.5S10.5 18 3.75 21"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Quote.displayName = 'Quote';
