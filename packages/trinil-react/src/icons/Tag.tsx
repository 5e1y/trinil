import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Tag: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m19.793 13.207-6.586 6.586a1 1 0 0 1-1.414 0l-7.5-7.5A1 1 0 0 1 4 11.586V7a3 3 0 0 1 3-3h4.586a1 1 0 0 1 .707.293l7.5 7.5a1 1 0 0 1 0 1.414ZM8.5 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" clip-rule="evenodd"/><path d="M10 8.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Tag.displayName = 'Tag';
