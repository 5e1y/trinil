import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const CreditCard: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M21.75 9V7.5a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3V9m19.5 0v7.5a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V9m19.5 0H2.25m4.5 3.75h1.5a1.5 1.5 0 0 1 0 3h-1.5a1.5 1.5 0 0 1 0-3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
CreditCard.displayName = 'CreditCard';
