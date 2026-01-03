import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Record: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M6 15.75a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5m0 0h12m0 0a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Record.displayName = 'Record';
