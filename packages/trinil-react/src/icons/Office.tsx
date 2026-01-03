import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Office: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M19.5 11.25h2.25m-2.25 0v4.5m0-4.5h-2.25m-4.5 4.5v3a1.5 1.5 0 0 0 1.5 1.5H18a1.5 1.5 0 0 0 1.5-1.5v-3m-6.75 0v-4.5m0 4.5h6.75m-6.75-4.5h-6m6 0h1.5m-7.5 0V7.5m0 3.75H4.5M6.75 7.5h3V6a3 3 0 0 0-6 0v1.5zm-4.5 3.75H4.5m0 0v9m9.75-9V7.5h2.25m-2.25 3.75h3m0 0V7.5h-.75m0 0V4.719"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Office.displayName = 'Office';
