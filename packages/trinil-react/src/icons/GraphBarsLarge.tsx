import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const GraphBarsLarge: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M3 4.5V18a1 1 0 0 0 1 1h1.5m16 0h-1m0 0V5.1a.1.1 0 0 0-.1-.1h-2.8a.1.1 0 0 0-.1.1V19m3 0h-3m0 0h-3m0 0h-3m3 0V8.1a.1.1 0 0 0-.1-.1h-2.8a.1.1 0 0 0-.1.1V19m0 0h-3m0 0v-6.9a.1.1 0 0 0-.1-.1H5.6a.1.1 0 0 0-.1.1V19m3 0h-3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
GraphBarsLarge.displayName = 'GraphBarsLarge';
