import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const CashArrowDown: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M18.75 14.25v8.25m0 0 3.75-3.75m-3.75 3.75L15 18.75m6.75-6.363V7.5a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h7.5m1.162-3.788a2.25 2.25 0 1 1 1.8-1.8M6 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
CashArrowDown.displayName = 'CashArrowDown';
