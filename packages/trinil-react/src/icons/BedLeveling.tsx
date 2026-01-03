import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BedLeveling: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M2.25 13.5H3m3 0h.75m3 0h.75m3 0h.75m3 0H18m3 0h.75m-19.5 3.75H6m0 0h12m-12 0v3m12-3h3.75m-3.75 0v3m-12 0h2.25m-2.25 0H3.75m14.25 0h2.25m-2.25 0h-2.25M12 9.75l3.75-6h-7.5z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
BedLeveling.displayName = 'BedLeveling';
