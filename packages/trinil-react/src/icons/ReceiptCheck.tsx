import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ReceiptCheck: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M7.5 6H12m3 0h1.5m-9 3H12m3 0h1.5m-9 3H12m7.5-.583V3L18 2.25 16.5 3 15 2.25 13.5 3 12 2.25 10.5 3 9 2.25 7.5 3 6 2.25 4.5 3v18.75L6 21l1.5.75L9 21l1.5.75 1.461-.73m2.289-2.27 2.894 2.894a.15.15 0 0 0 .212 0l4.91-4.91"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
ReceiptCheck.displayName = 'ReceiptCheck';
