import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BedLeveling: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M3 15h3m0 0h12M6 15v3m12-3h3m-3 0v3m0 0h2m-2 0h-2M6 18H4m2 0h2m-5-5.5h.5m2 0h1m2 0h1m5 0h1m2 0h1m2 0h.5m-9.5 0h1m-.58-2.607L9.12 6.16A.1.1 0 0 1 9.2 6h5.6a.1.1 0 0 1 .08.16l-2.8 3.733a.1.1 0 0 1-.16 0Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

BedLeveling.displayName = 'BedLeveling';
