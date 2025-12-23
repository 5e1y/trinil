import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const UserCircle: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 15a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm0 0h2a5 5 0 0 1 4.624 3.093M12 15h-2a5 5 0 0 0-4.624 3.093m13.248 0a9 9 0 1 0-13.247 0m13.247 0A8.98 8.98 0 0 1 12 21a8.98 8.98 0 0 1-6.624-2.907"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
UserCircle.displayName = 'UserCircle';
