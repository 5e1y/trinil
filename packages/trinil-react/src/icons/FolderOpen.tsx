import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const FolderOpen: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m3.128 18.49 1.683-6.732A1 1 0 0 1 5.78 11H19M3.128 18.49A1 1 0 0 0 4 19h14.22a1 1 0 0 0 .97-.758l1.5-6A1 1 0 0 0 19.72 11H19M3.128 18.49A1 1 0 0 1 3 18V6a1 1 0 0 1 1-1h4.654c.813 0 1.544.495 1.846 1.25a1.99 1.99 0 0 0 1.846 1.25H18a1 1 0 0 1 1 1V11"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
FolderOpen.displayName = 'FolderOpen';
