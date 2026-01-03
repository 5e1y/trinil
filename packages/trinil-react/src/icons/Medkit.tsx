import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Medkit: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M6.75 5.25h-1.5a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V6.75a1.5 1.5 0 0 0-1.5-1.5h-1.5m-10.5 0 .67-1.342a3 3 0 0 1 2.684-1.658h3.792a3 3 0 0 1 2.683 1.658l.671 1.342m-10.5 0h10.5m-7.5 3h4.5v3h3v4.5h-3v3h-4.5v-3h-3v-4.5h3z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Medkit.displayName = 'Medkit';
