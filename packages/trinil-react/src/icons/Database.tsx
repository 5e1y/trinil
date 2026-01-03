import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Database: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M21.75 7.5c0 2.9-4.365 5.25-9.75 5.25S2.25 10.4 2.25 7.5m19.5 0c0-2.9-4.365-5.25-9.75-5.25S2.25 4.6 2.25 7.5m19.5 0V12M2.25 7.5V12m19.5 0c0 2.9-4.365 5.25-9.75 5.25S2.25 14.9 2.25 12m19.5 0v4.5c0 2.9-4.365 5.25-9.75 5.25S2.25 19.4 2.25 16.5V12"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Database.displayName = 'Database';
