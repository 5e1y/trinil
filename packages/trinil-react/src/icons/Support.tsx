import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Support: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M7 20h3m10 0h-2m0 0V9m0 11h-4m0 0v-7m0 7h-4m0 0v-3m-4.293 1.293L18.293 5.707c.63-.63.184-1.707-.707-1.707H5a1 1 0 0 0-1 1v12.586c0 .89 1.077 1.337 1.707.707Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Support.displayName = 'Support';
