import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Assistance: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M19.5 11.25v-1.5a7.5 7.5 0 0 0-15 0v1.5h3.256m4.244 3a4.5 4.5 0 0 1-4.244-3m4.244 3a4.5 4.5 0 1 0-4.244-3m4.244 3h2.25a6 6 0 0 1 6 6 1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5 6 6 0 0 1 6-6zm-4.244-3h3.494"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Assistance.displayName = 'Assistance';
