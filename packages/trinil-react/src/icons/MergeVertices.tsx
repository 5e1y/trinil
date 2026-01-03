import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const MergeVertices: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M20.25 20.25 16.5 16.5m0 0h3m-3 0v3M3.75 3.75 7.5 7.5m0 0h-3m3 0v-3m5.91 1.591a2.25 2.25 0 1 1 3.182-3.182 2.25 2.25 0 0 1-3.183 3.182m0 0L6.09 13.409m11.818-2.818a2.25 2.25 0 1 1 3.182-3.182 2.25 2.25 0 0 1-3.182 3.182m0 0-7.318 7.318m-4.5-4.5a2.25 2.25 0 1 1-3.182 3.182 2.25 2.25 0 0 1 3.182-3.182m4.5 4.5a2.25 2.25 0 1 1-3.182 3.182 2.25 2.25 0 0 1 3.182-3.182"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
MergeVertices.displayName = 'MergeVertices';
