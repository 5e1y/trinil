import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Coin: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M9.5 11v-.5a2.5 2.5 0 0 1 4.95-.5M9.5 11v2m0-2h-1m1 0H12m-2.5 2v.5a2.5 2.5 0 0 0 4.95.5M9.5 13h-1m1 0H12m0 8a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Coin.displayName = 'Coin';
