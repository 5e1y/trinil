import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ListCheck: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M10.5 3.75h11.25M10.5 12h11.25M10.5 20.25h11.25M2.25 3.75l1.5 1.5 3-3M2.25 12l1.5 1.5 3-3m-4.5 9.75 1.5 1.5 3-3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
ListCheck.displayName = 'ListCheck';
