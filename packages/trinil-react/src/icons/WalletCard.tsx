import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const WalletCard: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M18.5 13.5h-4.36a.19.19 0 0 0-.184.133A2 2 0 0 1 12.059 15h-.117a2 2 0 0 1-1.898-1.367.19.19 0 0 0-.184-.133h-.893m0 0 8.48-2.272a2 2 0 0 0 1.414-2.45L18.384 7m-9.417 6.5h-1.43m-2.037 0h2.038m0 0a2 2 0 0 1-1.234-1.357L5.139 7.796A2 2 0 0 1 5.09 7m0 0a2 2 0 0 1 1.463-1.653l8.694-2.33a2 2 0 0 1 2.45 1.415L18.383 7M5.09 7H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-.616"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

WalletCard.displayName = 'WalletCard';
