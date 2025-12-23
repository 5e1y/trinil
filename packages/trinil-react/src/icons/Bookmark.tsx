import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Bookmark: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M16.5 3.5h-9a1 1 0 0 0-1 1v14.178a1 1 0 0 0 1.537.844l3.426-2.18a1 1 0 0 1 1.074 0l3.426 2.18a1 1 0 0 0 1.537-.844V4.5a1 1 0 0 0-1-1Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Bookmark.displayName = 'Bookmark';
