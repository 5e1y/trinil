import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ArrowDownUp: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M8 19.5 3.5 15M8 19.5l4.5-4.5M8 19.5v-15m8 0L20.5 9M16 4.5 11.5 9M16 4.5v15"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
ArrowDownUp.displayName = 'ArrowDownUp';
