import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Target: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 5.25v-3m0 3A6.75 6.75 0 0 0 5.25 12M12 5.25A6.75 6.75 0 0 1 18.75 12m0 0h3m-3 0A6.75 6.75 0 0 1 12 18.75M5.25 12h-3m3 0A6.75 6.75 0 0 0 12 18.75m0 0v3M15 12a3 3 0 1 0-6 0 3 3 0 0 0 6 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Target.displayName = 'Target';
