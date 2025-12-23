import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const User: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 14a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11Zm0 0H9a5 5 0 0 0-5 5v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1a5 5 0 0 0-5-5z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
User.displayName = 'User';
