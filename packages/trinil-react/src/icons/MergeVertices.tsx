import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const MergeVertices: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M14.475 5.99a1.5 1.5 0 1 0 2.121-2.122 1.5 1.5 0 0 0-2.121 2.121Zm0 0L5.99 14.474m0 0a1.5 1.5 0 1 1-2.12 2.12 1.5 1.5 0 0 1 2.12-2.12Zm12.02-4.95a1.5 1.5 0 1 0 2.122-2.121 1.5 1.5 0 0 0-2.122 2.12Zm0 0L9.525 18.01m0 0a1.5 1.5 0 1 1-2.119 2.121 1.5 1.5 0 0 1 2.12-2.12ZM20.5 20.5 16 16m0 0h3m-3 0v3M3.5 3.5 8 8m0 0V5m0 3H5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
MergeVertices.displayName = 'MergeVertices';
