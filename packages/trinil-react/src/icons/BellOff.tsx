import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BellOff: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="m7.667 18.5 8.109-12.163M7.666 18.5 6 21m1.667-2.5h11.418a.415.415 0 0 0 .381-.578l-.087-.205A17.1 17.1 0 0 1 18 11a5.99 5.99 0 0 0-2.224-4.663M4.5 18l.121-.283A17.05 17.05 0 0 0 6 11a6 6 0 0 1 3.504-5.458.65.65 0 0 0 .385-.545 2.114 2.114 0 0 1 4.135-.497M18 3l-2.224 3.337"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

BellOff.displayName = 'BellOff';
