import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Bell: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M14.818 18.5h4.267a.415.415 0 0 0 .381-.578l-.087-.205A17.1 17.1 0 0 1 18 11a6 6 0 0 0-3.504-5.458.65.65 0 0 1-.385-.545 2.114 2.114 0 0 0-4.222 0 .65.65 0 0 1-.385.545A6 6 0 0 0 6 11c0 2.31-.469 4.594-1.379 6.717l-.087.205a.415.415 0 0 0 .38.578h4.268m5.636 0H9.182m5.636 0a2.839 2.839 0 0 1-5.636 0"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Bell.displayName = 'Bell';
