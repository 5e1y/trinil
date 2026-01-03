import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const DotsHorizontal: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M12 11.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M21 11.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M3 11.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
DotsHorizontal.displayName = 'DotsHorizontal';
