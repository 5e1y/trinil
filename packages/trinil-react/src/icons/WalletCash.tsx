import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const WalletCash: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M18.75 12.75h-4.5a2.25 2.25 0 0 1-3.966 1.455m-4.94-1.455a3 3 0 1 1 4.94 1.455m-4.94-1.455H9.75c0 .555.2 1.063.534 1.455m-4.94-1.455H5.25m13.099-7.5a3 3 0 1 1-5.197 0m5.197 0a2.999 2.999 0 0 0-5.198 0m5.198 0h.401a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h7.901"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
WalletCash.displayName = 'WalletCash';
