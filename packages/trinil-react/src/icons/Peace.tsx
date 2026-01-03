import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Peace: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 21.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.776.475-3.442 1.305-4.876M12 21.75c5.385 0 9.75-4.365 9.75-9.75a9.7 9.7 0 0 0-1.305-4.876M12 21.75V12m8.445-4.876A9.75 9.75 0 0 0 12 2.25a9.75 9.75 0 0 0-8.445 4.874m16.89 0L12 12m0 0L3.555 7.124"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Peace.displayName = 'Peace';
