import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const FolderOpen: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M2.25 20.25v-15a1.5 1.5 0 0 1 1.5-1.5h3.257a3 3 0 0 1 2.122.879L10.37 5.87a3 3 0 0 0 2.122.879h3.257a1.5 1.5 0 0 1 1.5 1.5v2.25m-15 9.75 4.5-9.75h10.5m-15 9.75h15l4.5-9.75h-4.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
FolderOpen.displayName = 'FolderOpen';
