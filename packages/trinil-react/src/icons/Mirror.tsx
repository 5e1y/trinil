import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Mirror: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 2.25v1.5m0 3v1.5m0 13.5v-1.5m0-3v-1.5m0-3v-1.5m9.75 4.5-6-7.5v7.5zm-13.5-7.5v7.5h-6z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Mirror.displayName = 'Mirror';
