import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Texture: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M21 15.757A9.7 9.7 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75-5.132 0-9.339 3.966-9.722 9a9.9 9.9 0 0 0 .233 3M21 15.757a9.75 9.75 0 0 1-9 5.993c-4.61 0-8.473-3.2-9.49-7.5M21 15.757C12.75 18 12.75 13.5 8.25 12.75s-5.74 1.5-5.74 1.5M17.25 9a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Texture.displayName = 'Texture';
