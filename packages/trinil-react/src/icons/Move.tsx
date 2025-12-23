import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Move: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M16 12h4.5m0 0-2-2m2 2-2 2M12 8V3.5m0 0 2 2m-2-2-2 2M8 12H3.5m0 0 2 2m-2-2 2-2m6.5 6v4.5m0 0 2-2m-2 2-2-2m3.5-6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Move.displayName = 'Move';
