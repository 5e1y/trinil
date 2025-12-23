import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Archive: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M4.5 9H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.5m-15 0v9a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V9m-15 0h15m-10 5.5h5a1.5 1.5 0 0 0 0-3h-5a1.5 1.5 0 0 0 0 3Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Archive.displayName = 'Archive';
