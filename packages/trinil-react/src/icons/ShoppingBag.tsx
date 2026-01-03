import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ShoppingBag: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M16.5 7.5h1.577a1.5 1.5 0 0 1 1.498 1.421l.592 11.25a1.5 1.5 0 0 1-1.498 1.579H5.33a1.5 1.5 0 0 1-1.498-1.579l.592-11.25A1.5 1.5 0 0 1 5.923 7.5H7.5m9 0v-.75a4.5 4.5 0 0 0-9 0v.75m9 0h-9m9 3a4.5 4.5 0 0 1-9 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
ShoppingBag.displayName = 'ShoppingBag';
