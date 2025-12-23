import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Users: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M10 14a5 5 0 1 1 2-9.584M10 14h2m-2 0H8a5 5 0 0 0-5 5 1 1 0 0 0 1 1h13m-7-6a5.001 5.001 0 0 0 2-9.584M12 14a5 5 0 0 1 5 5v1m-5-6h2m3 6h3a1 1 0 0 0 1-1 5 5 0 0 0-5-5h-2m0 0a5 5 0 1 0-2-9.584"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Users.displayName = 'Users';
