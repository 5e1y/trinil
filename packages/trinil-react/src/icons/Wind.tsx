import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Wind: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M2.25 14.25h15a4.5 4.5 0 1 0 0-9m-15 6h7.5a4.5 4.5 0 1 0-3.182-7.682M2.25 17.25H12a2.25 2.25 0 1 1-1.591 3.841"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Wind.displayName = 'Wind';
