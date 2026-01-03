import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const UvUnwrap: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M7.5 16.5H3V12h4.5m0 4.5V12m0 4.5H12m-4.5 0V21H12v-4.5M7.5 12H12m-4.5 0V7.5m4.5 9V12m0 4.5h4.5M12 12h4.5M12 12V7.5m4.5 9V12m0 4.5H21V12h-4.5m-9-4.5V3H12v4.5m-4.5 0H12M15 9l2.128-2.128A2.417 2.417 0 0 0 16.5 3M15 9V6m0 3h3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
UvUnwrap.displayName = 'UvUnwrap';
