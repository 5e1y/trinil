import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const TrashRestore: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M18.75 8.25h1.5m-1.5 0-1.352 12.166a1.5 1.5 0 0 1-1.49 1.334H8.092a1.5 1.5 0 0 1-1.491-1.334L5.25 8.25m13.5 0H16.5m-12.75 0h1.5m0 0H7.5m0 0v-1.5a4.5 4.5 0 0 1 9 0v1.5m-9 0h9M12 18.75v-7.5m0 0 3 3m-3-3-3 3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
TrashRestore.displayName = 'TrashRestore';
