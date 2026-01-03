import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const GitMerge: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M6 17.25a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5m0 0V9m0-2.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5m0 0V9m0 0a3 3 0 0 0 3 3h6a3 3 0 0 1 3 3v2.25m0 0a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
GitMerge.displayName = 'GitMerge';
