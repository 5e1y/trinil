import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const UvMap: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M21.75 12c0-5.385-4.365-9.75-9.75-9.75M21.75 12c0 5.385-4.365 9.75-9.75 9.75M21.75 12c0 2.485-4.365 4.5-9.75 4.5-1.46 0-2.844-.148-4.087-.413M12 2.25c-5.385 0-9.75 4.365-9.75 9.75M12 2.25c-2.485 0-4.5 4.365-4.5 9.75 0 1.46.148 2.844.413 4.087M12 21.75c-5.385 0-9.75-4.365-9.75-9.75M12 21.75c-1.812 0-3.373-2.32-4.087-5.663M2.25 12c0 1.812 2.32 3.373 5.663 4.087"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
UvMap.displayName = 'UvMap';
