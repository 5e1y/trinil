import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const RadioAlt: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M15 15.75h2.25m0 0h1.5m-1.5 0v-1.5m0 1.5v1.5m-1.5-10.5h4.5a1.5 1.5 0 0 1 1.5 1.5v10.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5zm0 0 3-3.75m-3 3.75-3-3.75m0 10.5a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
RadioAlt.displayName = 'RadioAlt';
