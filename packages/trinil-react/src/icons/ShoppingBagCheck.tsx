import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ShoppingBagCheck: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M8 8H5.926a1 1 0 0 0-.997.923l-.846 11A1 1 0 0 0 5.08 21H14M8 8V7a4 4 0 1 1 8 0v1M8 8h8m0 0h2.074a1 1 0 0 1 .997.923L19.4 13.2M8 10.5v.5a4 4 0 0 0 8 0v-.5m3.4 2.699A5 5 0 0 0 14 21m5.4-7.801A5 5 0 1 1 14 21m2-3 1.43 1.43a.1.1 0 0 0 .14 0L20 17"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
ShoppingBagCheck.displayName = 'ShoppingBagCheck';
