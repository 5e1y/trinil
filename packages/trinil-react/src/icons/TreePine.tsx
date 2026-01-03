import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const TreePine: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 21.75v-3m0 0c-4.092.63-7.19-3.62-5.338-7.323l4.253-8.506a1.214 1.214 0 0 1 2.17 0l4.253 8.506C19.19 15.13 16.092 19.38 12 18.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
TreePine.displayName = 'TreePine';
