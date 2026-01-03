import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Intersect: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M16.5 7.5h3c.414 0 .79.168 1.06.44.272.27.44.646.44 1.06v10.5a1.5 1.5 0 0 1-1.5 1.5H9c-.414 0-.79-.168-1.06-.44a1.5 1.5 0 0 1-.44-1.06v-3m9-9v-3A1.5 1.5 0 0 0 15 3H4.5A1.5 1.5 0 0 0 3 4.5V15a1.5 1.5 0 0 0 1.5 1.5h3m9-9-9 9m9-9V12m0-4.5H12m-4.5 9V12m0 4.5H12m4.5-4.5v3a1.5 1.5 0 0 1-1.5 1.5h-3m4.5-4.5L12 16.5m0-9H9A1.5 1.5 0 0 0 7.5 9v3M12 7.5 7.5 12"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Intersect.displayName = 'Intersect';
