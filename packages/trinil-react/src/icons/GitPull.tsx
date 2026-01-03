import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const GitPull: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M5.25 16.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5m0 0v-9m0 0a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5m13.5 9V8.25a3 3 0 0 0-3-3H10.5m8.25 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M10.5 5.25l3-3m-3 3 3 3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
GitPull.displayName = 'GitPull';
