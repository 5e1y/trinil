import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Tag: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M3 6v5.379c0 .398.158.779.44 1.06l8.25 8.25a1.5 1.5 0 0 0 2.12 0l6.88-6.878a1.5 1.5 0 0 0 0-2.122l-8.25-8.25A1.5 1.5 0 0 0 11.378 3H6a3 3 0 0 0-3 3m3.75 3a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0" clip-rule="evenodd"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Tag.displayName = 'Tag';
