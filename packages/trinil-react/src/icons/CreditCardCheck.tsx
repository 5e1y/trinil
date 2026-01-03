import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const CreditCardCheck: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M21.75 9V7.5a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3V9m19.5 0H2.25m19.5 0v3.387M2.25 9v7.5a3 3 0 0 0 3 3h6.167m2.833-.75 2.894 2.894a.15.15 0 0 0 .212 0l4.91-4.91M6.75 12.75h1.5a1.5 1.5 0 0 1 0 3h-1.5a1.5 1.5 0 0 1 0-3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
CreditCardCheck.displayName = 'CreditCardCheck';
