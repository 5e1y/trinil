import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Sofa: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M6 17.25h12m-12 0V13.5m0 3.75H3.75m14.25 0V13.5m0 3.75h2.25M6 13.5V9.75a1.5 1.5 0 0 0-1.5-1.5M6 13.5h12m0 0V9.75a1.5 1.5 0 0 1 1.5-1.5m-15.75 9v1.5m0-1.5a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h.75m15.75 9v1.5m0-1.5a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-1.5-1.5h-.75m0 0v-1.5a1.5 1.5 0 0 0-1.5-1.5H6a1.5 1.5 0 0 0-1.5 1.5v1.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Sofa.displayName = 'Sofa';
