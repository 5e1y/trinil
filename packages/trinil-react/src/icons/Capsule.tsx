import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Capsule: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m9 9-4.5 4.5a4.243 4.243 0 0 0 6 6L15 15M9 9l4.5-4.5a4.243 4.243 0 1 1 6 6L15 15M9 9l6 6"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Capsule.displayName = 'Capsule';
