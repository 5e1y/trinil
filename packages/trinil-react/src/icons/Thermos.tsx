import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Thermos: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M6.75 9.75v10.5a1.5 1.5 0 0 0 1.5 1.5H15a1.5 1.5 0 0 0 1.5-1.5V9.75m-9.75 0h9.75m-9.75 0a1.23 1.23 0 0 1-1.206-1.47l.965-4.824a1.5 1.5 0 0 1 1.47-1.206h7.291a1.5 1.5 0 0 1 1.471 1.206l.059.294m-.3 6a1.23 1.23 0 0 0 1.206-1.47l-.156-.78m-.75-3.75h1.575a1.875 1.875 0 1 1 0 3.75h-.825m-.75-3.75.75 3.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Thermos.displayName = 'Thermos';
