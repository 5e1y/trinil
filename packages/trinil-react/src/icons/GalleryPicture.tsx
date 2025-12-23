import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const GalleryPicture: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M5 13.5V7a1 1 0 0 1 1-1h1m-2 7.5V20a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-1M5 13.5h1.217c1.233 0 2.416.52 3.288 1.444 1.508 1.6 3.85 1.906 5.68.742l.815-.52m0 0V7a1 1 0 0 0-1-1H7m9 9.167V19m0 0h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2m2.505 4.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
GalleryPicture.displayName = 'GalleryPicture';
