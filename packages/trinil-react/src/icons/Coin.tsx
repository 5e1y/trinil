import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Coin: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M11.25 10.5h-1.5m0 0H9m.75 0v-.75a2.25 2.25 0 0 1 4.5 0v.75m-4.5 0v3m1.5 0h-1.5m0 0H9m.75 0v.75a2.25 2.25 0 0 0 4.5 0v-.75m7.5-1.5c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Coin.displayName = 'Coin';
