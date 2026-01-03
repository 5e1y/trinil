import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Capsules: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M4.5 3.75v16.5a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5H6a1.5 1.5 0 0 0-1.5 1.5m3 4.5v-1.5a1.5 1.5 0 1 1 3 0v1.5a1.5 1.5 0 1 1-3 0m0 9v-1.5a1.5 1.5 0 0 1 3 0v1.5a1.5 1.5 0 0 1-3 0m9 0v-1.5a1.5 1.5 0 0 0-3 0v1.5a1.5 1.5 0 0 0 3 0m0-10.5v1.5a1.5 1.5 0 0 1-3 0v-1.5a1.5 1.5 0 0 1 3 0" clip-rule="evenodd"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Capsules.displayName = 'Capsules';
