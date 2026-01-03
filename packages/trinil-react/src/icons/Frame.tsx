import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Frame: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M6.75 2.25v4.5m0 0v10.5m0-10.5h10.5m-10.5 0h-4.5m4.5 10.5v4.5m0-4.5h10.5m-10.5 0h-4.5m15-15v4.5m0 0v10.5m0-10.5h4.5m-4.5 10.5v4.5m0-4.5h4.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Frame.displayName = 'Frame';
