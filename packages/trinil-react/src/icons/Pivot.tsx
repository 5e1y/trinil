import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Pivot: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M6.914 6.914C4.116 7.962 2.248 9.848 2.248 12s1.868 4.038 4.666 5.086m0-10.172c1.481-.554 3.222-.873 5.086-.873s3.605.319 5.086.873m-10.172 0C6.36 8.395 6.041 10.136 6.041 12l2.209-1.5M6.914 6.914C7.962 4.116 9.848 2.248 12 2.248s4.038 1.868 5.086 4.666m0 0c2.798 1.048 4.666 2.934 4.666 5.086s-1.868 4.038-4.666 5.086m0-10.172c.554 1.481.873 3.222.873 5.086s-.32 3.605-.873 5.086m0 0c-1.048 2.798-2.934 4.666-5.086 4.666s-4.038-1.868-5.086-4.666m0 0c.89.332 1.872.58 2.919.726.697.096 1.422.188 2.167.188l-1.5-2.25M12.75 12a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Pivot.displayName = 'Pivot';
