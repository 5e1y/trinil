import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ClipboardCheck: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M16.5 4.5v.75a1.5 1.5 0 0 1-1.5 1.5H9a1.5 1.5 0 0 1-1.5-1.5V4.5m9 0v-.75a1.5 1.5 0 0 0-1.5-1.5H9a1.5 1.5 0 0 0-1.5 1.5v.75m9 0h2.25a1.5 1.5 0 0 1 1.5 1.5v5.634M7.5 4.5H5.25A1.5 1.5 0 0 0 3.75 6v14.25a1.5 1.5 0 0 0 1.5 1.5h7.137m1.863-3 2.894 2.894a.15.15 0 0 0 .212 0l4.91-4.91"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
ClipboardCheck.displayName = 'ClipboardCheck';
