import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const SafeFrame: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M21.75 8.25v-3a1.5 1.5 0 0 0-1.5-1.5H16.5m5.25 12v3a1.5 1.5 0 0 1-1.5 1.5H16.5m-14.25-12v-3a1.5 1.5 0 0 1 1.5-1.5H7.5m0 16.5H3.75a1.5 1.5 0 0 1-1.5-1.5v-3M12 9v3m0 0v3m0-3H9m3 0h3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
SafeFrame.displayName = 'SafeFrame';
