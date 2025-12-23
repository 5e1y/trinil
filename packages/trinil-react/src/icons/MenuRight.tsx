import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const MenuRight: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M16 5h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3m0-14H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h11m0-14v14"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
MenuRight.displayName = 'MenuRight';
