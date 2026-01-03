import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Hammer: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m9 11.25 9.129 9.129a2.121 2.121 0 0 0 3-3L12 8.25m-3 3 3-3m-3 3L7.5 12l-.75 1.5L2.25 9l1.5-.75.75-1.5L8.25 3h9v3h-3A2.25 2.25 0 0 0 12 8.25"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Hammer.displayName = 'Hammer';
