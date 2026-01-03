import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Home: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M3 9.764V19.5A1.5 1.5 0 0 0 4.5 21h2.25a1.5 1.5 0 0 0 1.5-1.5v-5.25a1.5 1.5 0 0 1 1.5-1.5h4.5a1.5 1.5 0 0 1 1.5 1.5v5.25a1.5 1.5 0 0 0 1.5 1.5h2.25a1.5 1.5 0 0 0 1.5-1.5V9.764c0-.48-.23-.931-.618-1.213l-7.025-5.11a2.31 2.31 0 0 0-2.714 0l-7.025 5.11A1.5 1.5 0 0 0 3 9.764"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Home.displayName = 'Home';
