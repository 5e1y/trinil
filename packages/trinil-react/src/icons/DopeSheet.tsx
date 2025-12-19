import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const DopeSheet: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="m10 7 1.93-1.93a.1.1 0 0 1 .14 0L14 7m-4 0 1.93 1.93a.1.1 0 0 0 .14 0L14 7m-4 0H5.5M14 7h2m0 0 1.93-1.93a.1.1 0 0 1 .14 0L20 7m-4 0 1.93 1.93a.1.1 0 0 0 .14 0L20 7m0 0h1M3 7h.5m3 5 1.93-1.93a.1.1 0 0 1 .14 0L10.5 12m-4 0 1.93 1.93a.1.1 0 0 0 .14 0L10.5 12m-4 0h-1m5 0H13m0 0 1.93-1.93a.1.1 0 0 1 .14 0L17 12m-4 0 1.93 1.93a.1.1 0 0 0 .14 0L17 12m0 0h4M3 12h.5m6.5 5 1.93-1.93a.1.1 0 0 1 .14 0L14 17m-4 0 1.93 1.93a.1.1 0 0 0 .14 0L14 17m-4 0H5.5m8.5 0h7M3 17h.5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

DopeSheet.displayName = 'DopeSheet';
