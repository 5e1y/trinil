import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Like: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M7.5 9.75H3.75a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5H7.5m0-10.5L14.25 3l.721.721a3 3 0 0 1 .562 3.463L14.25 9.75h6c.828 0 1.507.673 1.431 1.498a16.4 16.4 0 0 1-2.983 8.024l-.25.35a1.5 1.5 0 0 1-1.22.628H7.5m0-10.5v10.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Like.displayName = 'Like';
