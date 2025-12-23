import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Texture: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M7.5 11.5v-4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v6.297m-9-2.297v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-2.703m-9-2.297h.217c1.233 0 2.416.52 3.288 1.444 1.458 1.547 3.695 1.884 5.495.853m4.193.532A9 9 0 1 1 3.307 9.67a9 9 0 0 1 17.386 4.66ZM13 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Texture.displayName = 'Texture';
