import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Wallet: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M3 17V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm2.5-7v.5a1 1 0 0 0 1 1h3.36c.084 0 .158.053.184.133A2 2 0 0 0 11.941 13h.117a2 2 0 0 0 1.898-1.367c.026-.08.1-.133.184-.133h3.36a1 1 0 0 0 1-1V10a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2Z" clip-rule="evenodd"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Wallet.displayName = 'Wallet';
