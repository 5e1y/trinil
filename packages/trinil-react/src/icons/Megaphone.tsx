import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Megaphone: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M7 15a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6.697a1 1 0 0 0 .555-.168l4.151-2.767a.384.384 0 0 1 .597.319v13.232a.384.384 0 0 1-.597.32l-4.151-2.768a1 1 0 0 0-.555-.168H12m-5 0c1.026 0 1.789.95 1.566 1.953L8.23 18.47a1 1 0 0 0 .812 1.204l1.004.167a1 1 0 0 0 1.145-.79L12 15m-5 0h5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Megaphone.displayName = 'Megaphone';
