import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Cone: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M20.97 16.933c-.377 2.697-4.25 4.817-8.97 4.817s-8.592-2.12-8.97-4.817c-.039-.281.05-.56.202-.8L12 2.25l8.768 13.883c.152.24.241.519.202.8"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Cone.displayName = 'Cone';
