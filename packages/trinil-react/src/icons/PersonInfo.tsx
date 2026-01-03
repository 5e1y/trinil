import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const PersonInfo: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M9 12.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 0h.75a3 3 0 0 1 3 3v1.5h-7.5v-1.5a3 3 0 0 1 3-3zM18.75 9h-3M18 12h-2.25m1.5 3h-1.5m6-8.25v10.5a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6.75a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
PersonInfo.displayName = 'PersonInfo';
