import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const FlowerPot: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 14.25H6.75l.75 1.5a5 5 0 0 0 0 6h9a5 5 0 0 0 0-6l.75-1.5zm0 0V9m0 0a2.25 2.25 0 1 1-2.25-2.25M12 9a2.25 2.25 0 1 0 2.25-2.25M12 9a2.25 2.25 0 0 1-2.25-2.25M12 9a2.25 2.25 0 0 0 2.25-2.25M12 4.5a2.25 2.25 0 1 0-2.25 2.25M12 4.5a2.25 2.25 0 1 1 2.25 2.25M12 4.5a2.25 2.25 0 0 0-2.25 2.25M12 4.5a2.25 2.25 0 0 1 2.25 2.25"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
FlowerPot.displayName = 'FlowerPot';
