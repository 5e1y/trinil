import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const VideoOff: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M14.25 8.25v-1.5a1.5 1.5 0 0 0-1.5-1.5h-3m4.5 3 7.5-3v12m-7.5-9v1.5m0 6v1.5a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5V6.75a1.5 1.5 0 0 1 1.5-1.5h1.5m9 10.5v-1.5m0 1.5 2.5 1M5.25 5.25l-3-3m3 3L7.5 7.5l2.25 2.25L12 12l2.25 2.25m0 0 2.5 2.5m0 0 5 5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
VideoOff.displayName = 'VideoOff';
