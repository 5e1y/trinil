import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ArrowLeftRight: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M19.5 16 15 20.5m4.5-4.5L15 11.5m4.5 4.5h-15m0-8L9 3.5M4.5 8 9 12.5M4.5 8h15"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
ArrowLeftRight.displayName = 'ArrowLeftRight';
