import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ScaleUniform: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M4 4.5v-.4a.1.1 0 0 1 .1-.1h.4m15.5.5v-.4a.1.1 0 0 0-.1-.1h-.4m-3 0h-1m-8 0h1m3 0h1M4 7.5v1m0 3v1m16-5v1m-8.5 4 5-5m0 0v4m0-4h-4m4 10h-.4a.1.1 0 0 0-.1.1v2.3a.1.1 0 0 0 .1.1h3.8a.1.1 0 0 0 .1-.1v-2.3a.1.1 0 0 0-.1-.1h-.4m-3 0v-1a1.5 1.5 0 0 1 3 0v1m-3 0h3m.5-6v1M11.5 20h1M23 18a5 5 0 1 0-10 0 5 5 0 0 0 10 0ZM9.5 14.6v5.3a.1.1 0 0 1-.1.1H4.1a.1.1 0 0 1-.1-.1v-5.3a.1.1 0 0 1 .1-.1h5.3a.1.1 0 0 1 .1.1Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
ScaleUniform.displayName = 'ScaleUniform';
