import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LoopAnimation: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M7.23 18.423A8 8 0 1 1 12 20m-4.77-1.577L3 18.5m4.23-.077V14M11 10.75v2.5M9 11.5v1m6.4 1.25h-2.3a.1.1 0 0 1-.1-.1v-3.3a.1.1 0 0 1 .1-.1h2.3a.1.1 0 0 1 .1.1v3.3a.1.1 0 0 1-.1.1Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
LoopAnimation.displayName = 'LoopAnimation';
