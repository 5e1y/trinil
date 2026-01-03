import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const SelectFace: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M3 11.25V12m0 3v1.5l1.5.875M21 15v1.5l-1.5.875M21 12v-.75m-9 5.25v.75m0 3v1.5m0 0 .75-.437m-.75.437-.75-.437m4.5-1.75.75-.438m-9 0 .75.438M12 2.25 3 7.5l9 5.25 9-5.25z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
SelectFace.displayName = 'SelectFace';
