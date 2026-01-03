import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Infill: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M21 18.75v.75a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-.75m18 0v-4.5m0 4.5-3.44-3.44a1.5 1.5 0 0 0-2.12 0l-2.38 2.38a1.5 1.5 0 0 1-2.12 0l-2.38-2.38a1.5 1.5 0 0 0-2.12 0L3 18.75m18-4.5v-4.5m0 4.5-3.44-3.44a1.5 1.5 0 0 0-2.12 0l-2.38 2.38a1.5 1.5 0 0 1-2.12 0l-2.38-2.38a1.5 1.5 0 0 0-2.12 0L3 14.25m18-4.5V4.5A1.5 1.5 0 0 0 19.5 3h-15A1.5 1.5 0 0 0 3 4.5v5.25m18 0-3.44-3.44a1.5 1.5 0 0 0-2.12 0l-2.38 2.38a1.5 1.5 0 0 1-2.12 0L8.56 6.31a1.5 1.5 0 0 0-2.12 0L3 9.75m0 0v4.5m0 0v4.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Infill.displayName = 'Infill';
