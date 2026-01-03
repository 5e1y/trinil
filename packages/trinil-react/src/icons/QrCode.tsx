import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const QrCode: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M21 7.5v-3A1.5 1.5 0 0 0 19.5 3h-3m-9 0h-3A1.5 1.5 0 0 0 3 4.5v3m0 9v3A1.5 1.5 0 0 0 4.5 21h3m9 0h3a1.5 1.5 0 0 0 1.5-1.5v-3M9 6H7.5A1.5 1.5 0 0 0 6 7.5V9m3-3v3H6m3-3h3M6 9v6m0 0v1.5A1.5 1.5 0 0 0 7.5 18H9m-3-3h3m0 0v3m0-3v-2.25M9 18h3m3-12h1.5A1.5 1.5 0 0 1 18 7.5V9m-3-3v3h3m-3-3h-3m6 3v5.25M12 6v.75m-3 6h3v1.5m-3-1.5V12m3 6v-.75m0 .75h3m-3.75-8.25h1.5M15 18h1.5a1.5 1.5 0 0 0 1.5-1.5v-2.25M15 18v-.75m3-3h-3V12"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
QrCode.displayName = 'QrCode';
