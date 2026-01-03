import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Gravity: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 2.25V4.5M15.75 3v2.25M8.25 3v2.25m4.5 10.5h.75v.75a1.5 1.5 0 0 1-3 0v-3a1.5 1.5 0 0 1 3 0m5.25 1.5a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Gravity.displayName = 'Gravity';
