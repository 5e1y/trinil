import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Bottle: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m15 5.25 1.81 1.81a1.5 1.5 0 0 1 .44 1.061V9.88a1.5 1.5 0 0 1-.44 1.06 1.5 1.5 0 0 0 0 2.122 1.5 1.5 0 0 1 .44 1.06v6.129a1.5 1.5 0 0 1-1.5 1.5h-7.5a1.5 1.5 0 0 1-1.5-1.5v-6.129c0-.398.158-.779.44-1.06a1.5 1.5 0 0 0 0-2.122 1.5 1.5 0 0 1-.44-1.06V8.12c0-.398.158-.779.44-1.06L9 5.25m6 0v-3H9v3m6 0H9"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Bottle.displayName = 'Bottle';
