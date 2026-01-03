import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Mouse: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M15 8.25h-1.5c-2.25 0-3.75 1.343-3.75 3v5.25a5.25 5.25 0 1 0 10.5 0v-5.25c0-1.657-1.5-3-3.75-3zm0 0v5.25m0-5.25C15 7 14.476 4.5 12 4.5s-2.424.789-4.447.789S4.5 4.5 4.5 3.687"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Mouse.displayName = 'Mouse';
