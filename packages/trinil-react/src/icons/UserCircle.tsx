import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const UserCircle: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 15a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m0 0h1.314A4.686 4.686 0 0 1 18 19.686M12 15h-1.314A4.686 4.686 0 0 0 6 19.686m12 0A9.73 9.73 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12A9.73 9.73 0 0 0 6 19.686m12 0a9.7 9.7 0 0 1-6 2.064 9.7 9.7 0 0 1-6-2.064"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
UserCircle.displayName = 'UserCircle';
