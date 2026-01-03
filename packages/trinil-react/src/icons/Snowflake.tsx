import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Snowflake: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 2.25v4.5m0 0-3-3m3 3 3-3m-3 3V12m0 0v5.25M12 12l4.547-2.625M12 12l-4.547 2.625M12 12l4.547 2.625M12 12 7.453 9.375M12 17.25v4.5m0-4.5 3 3m-3-3-3 3M20.444 7.125l-3.897 2.25m0 0 1.098-4.098m-1.098 4.098 4.098 1.098M7.453 14.625l-3.897 2.25m3.897-2.25-1.098 4.098m1.098-4.098-4.098-1.098m17.089 3.348-3.897-2.25m0 0 4.098-1.098m-4.098 1.098 1.098 4.098M7.453 9.375l-3.897-2.25m3.897 2.25-4.098 1.098m4.098-1.098L6.355 5.277"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Snowflake.displayName = 'Snowflake';
