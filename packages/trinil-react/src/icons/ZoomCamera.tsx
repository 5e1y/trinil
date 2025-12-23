import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ZoomCamera: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M8 10.5V9.1a.1.1 0 0 1 .1-.1H10m4 0h1.9a.1.1 0 0 1 .1.1v1.4m0 3v1.4a.1.1 0 0 1-.1.1H14m-4 0H8.1a.1.1 0 0 1-.1-.1v-1.4m-1.5-6L3 4m0 0v3m0-3h3m12 0h3m0 0v3m0-3-3.5 3.5m0 9L21 20m0 0v-3m0 3h-3M6.5 16.5 3 20m0 0v-3m0 3h3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
ZoomCamera.displayName = 'ZoomCamera';
