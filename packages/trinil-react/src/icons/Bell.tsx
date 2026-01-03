import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Bell: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M9 18.75h6m-6 0a3 3 0 1 0 6 0m-6 0H3.75a8.93 8.93 0 0 0 1.5-4.954V12a6.75 6.75 0 0 1 4.759-6.451 2.25 2.25 0 1 1 3.983 0A6.75 6.75 0 0 1 18.75 12v1.796c0 1.763.522 3.487 1.5 4.954H15"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Bell.displayName = 'Bell';
