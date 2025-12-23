import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LockCheck: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M8 10H6.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1H14M8 10V7a4 4 0 1 1 8 0v3m-8 0h8m0 0h1.5a1 1 0 0 1 1 1v2.025M16 18l1.43 1.43a.1.1 0 0 0 .14 0L20 17m-1.5-3.975A5 5 0 0 0 14 21m4.5-7.975A5 5 0 1 1 14 21"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
LockCheck.displayName = 'LockCheck';
