import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const CreditCardCheck: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M21 9V7.5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2V9m18 0H3m18 0v5M3 9v7.5a2 2 0 0 0 2 2h8.025M16 18l1.43 1.43a.1.1 0 0 0 .14 0L20 17m1-3a5 5 0 0 0-7.975 4.5M21 14a5 5 0 1 1-7.975 4.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
CreditCardCheck.displayName = 'CreditCardCheck';
