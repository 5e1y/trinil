import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const MegaphoneSound: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M5 15a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6.697a1 1 0 0 0 .555-.168l4.151-2.768a.384.384 0 0 1 .597.32v13.232a.384.384 0 0 1-.597.32l-4.151-2.768a1 1 0 0 0-.555-.168H10m-5 0c1.026 0 1.789.95 1.566 1.952L6.23 18.47a1 1 0 0 0 .812 1.203l1.004.168a1 1 0 0 0 1.145-.79L10 15m-5 0h5m9.5-4H22m-2.5-3.5L21 6m-1.5 8.5L21 16"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
MegaphoneSound.displayName = 'MegaphoneSound';
