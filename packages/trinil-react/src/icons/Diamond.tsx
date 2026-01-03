import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Diamond: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m17.25 3 4.5 6.75M17.25 3H12m5.25 0-1.961 6.75m6.461 0L12 21m9.75-11.25h-6.461M12 21 2.25 9.75M12 21 8.712 9.75M12 21l3.289-11.25m-13.039 0L6.75 3m-4.5 6.75h6.462M6.75 3l1.962 6.75M6.75 3H12M8.712 9.75 12 3M8.712 9.75h6.577M12 3l3.289 6.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Diamond.displayName = 'Diamond';
