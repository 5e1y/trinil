import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Music: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M21 15v2.25A2.25 2.25 0 1 1 18.75 15zm0 0V6.75M7.5 16.5v2.25a2.25 2.25 0 1 1-2.25-2.25zm0 0V8.25m0 0V4.5c4.486 0 8.96-.491 13.34-1.464L21 3v3.75M7.5 8.25c4.486 0 8.96-.491 13.34-1.464L21 6.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Music.displayName = 'Music';
