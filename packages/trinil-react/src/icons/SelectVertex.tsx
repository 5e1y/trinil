import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const SelectVertex: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M3.75 7.063 3 7.5m0 0v.75m0-.75 1.5.875m3-3.5-.75.438m3.75-2.188L12 2.25l1.5.875M3 11.25V12m0 3v1.5l1.5.875M21 15v1.5l-1.5.875M21 12v-.75m0-3V7.5m0 0-.75-.437M21 7.5l-1.5.875m-2.25-3.062-.75-.438M12 20.25v1.5m0 0 .75-.437m-.75.437-.75-.437m4.5-1.75.75-.438m-9 0 .75.438M12 15a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
SelectVertex.displayName = 'SelectVertex';
