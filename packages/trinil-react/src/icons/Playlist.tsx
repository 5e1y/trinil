import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Playlist: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M3 3.75h18M3 12h10.5M3 20.25h6m9-3.75h-2.25A2.25 2.25 0 1 0 18 18.75zm0 0V9.75l.659.22c1.019.34 2.13.26 3.091-.22"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Playlist.displayName = 'Playlist';
