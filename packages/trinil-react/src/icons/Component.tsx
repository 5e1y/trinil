import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Component: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m9.207 5.793 2.086-2.086a1 1 0 0 1 1.414 0l2.086 2.086a1 1 0 0 1 0 1.414l-2.086 2.086a1 1 0 0 1-1.414 0L9.207 7.207a1 1 0 0 1 0-1.414ZM9.207 16.793l2.086-2.086a1 1 0 0 1 1.414 0l2.086 2.086a1 1 0 0 1 0 1.414l-2.086 2.086a1 1 0 0 1-1.414 0l-2.086-2.086a1 1 0 0 1 0-1.414ZM3.707 11.293l2.086-2.086a1 1 0 0 1 1.414 0l2.086 2.086a1 1 0 0 1 0 1.414l-2.086 2.086a1 1 0 0 1-1.414 0l-2.086-2.086a1 1 0 0 1 0-1.414ZM14.707 11.293l2.086-2.086a1 1 0 0 1 1.414 0l2.086 2.086a1 1 0 0 1 0 1.414l-2.086 2.086a1 1 0 0 1-1.414 0l-2.086-2.086a1 1 0 0 1 0-1.414Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Component.displayName = 'Component';
