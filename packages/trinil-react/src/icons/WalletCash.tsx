import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const WalletCash: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M12.17 7H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-1.17m-5.66 0a3.001 3.001 0 0 0 5.66 0m-5.66 0a3 3 0 1 1 5.659 0M5.5 13.5h.67m0 0h3.69c.084 0 .158.053.184.133.163.49.504.884.936 1.12M6.17 13.5a3 3 0 1 1 4.81 1.254M18.5 13.5h-4.36a.19.19 0 0 0-.184.133A2 2 0 0 1 12.059 15h-.117c-.345 0-.674-.088-.962-.246"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

WalletCash.displayName = 'WalletCash';
