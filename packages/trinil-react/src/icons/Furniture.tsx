import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Furniture: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M18.75 17.25h1.5a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5h-4.5m3 12v3m0-3h-3m-10.5 0h-1.5a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 1 1.5-1.5h4.5m-3 12v3m0-3h3m0-12h7.5m-7.5 0v6m0 6h7.5m-7.5 0v-6m7.5-6v6m0 6v-6m3-1.5v3m-13.5-3v3m3-1.5h7.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Furniture.displayName = 'Furniture';
