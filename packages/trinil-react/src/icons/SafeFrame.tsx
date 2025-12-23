import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const SafeFrame: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M3 9V5.1a.1.1 0 0 1 .1-.1H7m10 0h3.9a.1.1 0 0 1 .1.1V9m0 6v3.9a.1.1 0 0 1-.1.1H17M7 19H3.1a.1.1 0 0 1-.1-.1V15m9-5v4m-2-2h4"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
SafeFrame.displayName = 'SafeFrame';
