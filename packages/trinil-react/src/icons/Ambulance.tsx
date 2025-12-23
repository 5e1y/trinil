import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Ambulance: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M9.5 17.25a1.75 1.75 0 1 1-3.5 0m3.5 0a1.75 1.75 0 1 0-3.5 0m3.5 0h7m-10.5 0H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1.4a.1.1 0 0 0 .1.1h2.41a1 1 0 0 1 .79.386l2.99 3.843a1 1 0 0 1 .21.614v3.907a1 1 0 0 1-1 1H20m0 0a1.75 1.75 0 1 1-3.5 0m3.5 0a1.75 1.75 0 1 0-3.5 0M8.1 7.5h2.3a.1.1 0 0 1 .1.1v1.3a.1.1 0 0 0 .1.1h1.3a.1.1 0 0 1 .1.1v2.3a.1.1 0 0 1-.1.1h-1.3a.1.1 0 0 0-.1.1v1.3a.1.1 0 0 1-.1.1H8.1a.1.1 0 0 1-.1-.1v-1.3a.1.1 0 0 0-.1-.1H6.6a.1.1 0 0 1-.1-.1V9.1a.1.1 0 0 1 .1-.1h1.3a.1.1 0 0 0 .1-.1V7.6a.1.1 0 0 1 .1-.1Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Ambulance.displayName = 'Ambulance';
