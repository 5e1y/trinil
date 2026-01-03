import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Move: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M16.5 12h5.25m0 0-3-3m3 3-3 3M7.5 12H2.25m0 0 3-3m-3 3 3 3M12 16.5v5.25m0 0 3-3m-3 3-3-3M12 7.5V2.25m0 0 3 3m-3-3-3 3M12.75 12a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Move.displayName = 'Move';
