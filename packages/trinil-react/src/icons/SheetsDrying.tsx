import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const SheetsDrying: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M2.5 5C4 6 7.2 7.5 12 7.5S20 6 21.5 5M19 3.5l-1.5 4.282m0 0V9.5m0-1.718C18.64 7.507 20 8 20 9v8.882a.93.93 0 0 1-.562.873C18.175 19.28 15.737 20 12 20s-6.175-.721-7.438-1.245A.93.93 0 0 1 4 17.882V9c0-1 1.36-1.493 2.5-1.218m11 0C16.5 8 15.5 8.5 14 10m3.5-2.218L16 3.5M14 10c-1.5 1.5-3.5 2.5-6 2.5m6-2.5c-3.6 0-6.5-1.977-7.5-2.218M5 3.5l1.5 4.282m0 0V9.5m0-1.718L8 3.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
SheetsDrying.displayName = 'SheetsDrying';
