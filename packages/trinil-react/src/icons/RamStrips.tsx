import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const RamStrips: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M3.5 15.5v1.9a.1.1 0 0 0 .1.1h4.3a.1.1 0 0 0 .1-.1v-1.9m-4.5 0H8m-4.5 0A.5.5 0 0 1 3 15v-3.5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1V15a.5.5 0 0 1-.5.5m0 0v1.9a.1.1 0 0 1-.1.1h-6.3a.1.1 0 0 1-.1-.1v-1.9m6.5 0H10m0 0H8M19.5 14h.65a.1.1 0 0 0 .1-.1v-1.525c0-.207.168-.375.375-.375a.375.375 0 0 0 .375-.375V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
RamStrips.displayName = 'RamStrips';
