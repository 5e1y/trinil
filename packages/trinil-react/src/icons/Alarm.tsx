import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Alarm: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M17.834 18.583 20.25 21m-2.416-2.417a8.22 8.22 0 0 0 2.416-5.833c0-.904-.145-1.773-.413-2.587m-2.003 8.42A8.22 8.22 0 0 1 12 21a8.22 8.22 0 0 1-5.834-2.417m0 0L3.75 21m2.416-2.417A8.22 8.22 0 0 1 3.75 12.75c0-.904.145-1.773.414-2.587m15.673 0 1.602-1.603a1.5 1.5 0 0 0 0-2.12l-3.878-3.88a1.5 1.5 0 0 0-2.122 0L13.5 4.5l.162.162m6.175 5.501A8.254 8.254 0 0 0 10.33 4.67m0 0 .169-.17L8.56 2.56a1.5 1.5 0 0 0-2.12 0L2.56 6.44a1.5 1.5 0 0 0 0 2.12l1.604 1.603M10.33 4.67a8.26 8.26 0 0 0-6.167 5.494M16.5 10.5 12 14.25l-3.75-3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Alarm.displayName = 'Alarm';
