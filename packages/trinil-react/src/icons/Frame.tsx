import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Frame: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M17 3.5V7m0 0v10m0-10h3.5M17 7H7m10 10v3.5m0-3.5h3.5M17 17H7m0 0H3.5M7 17V7m0 10v3.5M7 7H3.5M7 7V3.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Frame.displayName = 'Frame';
