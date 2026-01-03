import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const TestTube: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M16.5 17.25a4.5 4.5 0 1 1-9 0V6.089c0-.552-.128-1.096-.375-1.589a3.55 3.55 0 0 1-.375-1.589V2.25h10.5v.661c0 .552-.128 1.096-.375 1.589a3.55 3.55 0 0 0-.375 1.589V9.75m0 7.5h-3m3 0V13.5m0 0h-3m3 0V9.75m0 0h-3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
TestTube.displayName = 'TestTube';
