import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const SuitcaseStickers: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M6.75 6.75h-3a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h16.5a1.5 1.5 0 0 0 1.5-1.5V8.25a1.5 1.5 0 0 0-1.5-1.5h-3m-10.5 0 .746-1.864A3 3 0 0 1 10.28 3h3.438a3 3 0 0 1 2.785 1.886l.746 1.864m-10.5 0h10.5m-4.675 6.871-.756 2.904 2.903.756.756-2.904zm2.307-.42 1.403 2.652 2.652-1.402-1.403-2.652zM8.25 11.25a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
SuitcaseStickers.displayName = 'SuitcaseStickers';
