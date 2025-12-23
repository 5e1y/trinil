import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Playlist: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M17 15.5v-4.4a.1.1 0 0 1 .1-.1c1.423.022 1.945.489 3.9 0m-4 4.5v1.75a1.75 1.75 0 1 1-1.75-1.75zM10.5 18H4m0-6h10m6-6H4"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Playlist.displayName = 'Playlist';
