import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Comment: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M9 3.75h6a6.75 6.75 0 0 1 2.58 12.99 3.97 3.97 0 0 0 1.11 3.45l.06.06a7.5 7.5 0 0 1-6-3H9a6.75 6.75 0 0 1 0-13.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Comment.displayName = 'Comment';
