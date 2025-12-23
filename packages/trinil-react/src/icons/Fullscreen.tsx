import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Fullscreen: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M14.5 4H19a1 1 0 0 1 1 1v4.5m0 5V19a1 1 0 0 1-1 1h-4.5m-5 0H5a1 1 0 0 1-1-1v-4.5m0-5V5a1 1 0 0 1 1-1h4.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Fullscreen.displayName = 'Fullscreen';
