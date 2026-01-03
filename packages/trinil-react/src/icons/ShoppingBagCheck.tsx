import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ShoppingBagCheck: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M16.5 7.5h1.577a1.5 1.5 0 0 1 1.498 1.421l.134 2.547M16.5 7.5v-.75a4.5 4.5 0 0 0-9 0v.75m9 0h-9m0 0H5.923a1.5 1.5 0 0 0-1.498 1.421l-.592 11.25a1.5 1.5 0 0 0 1.498 1.579h7.056M16.4 11.44q.098-.455.099-.94m-9 0a4.5 4.5 0 0 0 4.452 4.5m2.298 3.75 2.894 2.894a.15.15 0 0 0 .212 0l4.91-4.91"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
ShoppingBagCheck.displayName = 'ShoppingBagCheck';
