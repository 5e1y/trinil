import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const CheckerTexture: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M12 20h4m-4 0H9.5m2.5 0v-2.5m4 2.5h1.5M16 20v-1.5m1.5 1.5H19a1 1 0 0 0 1-1v-1.5M17.5 20l2.5-2.5M16 4h3a1 1 0 0 1 1 1v3m-4-4h-1.5M16 4v1.5M14.5 4H12m2.5 0L12 6.5M12 4H8m4 0v2.5m4 12V16m0 2.5 2.5-2.5M16 16v-2.5m0 2.5h-2.5m2.5 0h2.5M16 13.5V12m0 1.5L13.5 16m2.5-4v-1.5m0 1.5h1.5M16 12h-1.5m1.5-1.5V8m0 2.5L18.5 8M16 8V5.5M16 8h2.5M16 8h-2.5M16 5.5 13.5 8M8 4H6.5M8 4v1.5M8 20H5a1 1 0 0 1-1-1v-3m4 4h1.5M8 20v-1.5M9.5 20l2.5-2.5M4 12v2.5M4 12V8m0 4h2.5M4 14.5V16m0-1.5L6.5 12M4 16h1.5M20 17.5V16m0 0v-4m0 4h-1.5m1.5-4V9.5m0 2.5h-2.5m-12 4H8m-2.5 0L8 13.5M8 16h2.5M8 16v-2.5M8 16v2.5m2.5-2.5H12m-1.5 0L8 18.5m4-2.5h1.5M12 16v-1.5m0 1.5v1.5m8-8V8m0 1.5L17.5 12M20 8h-1.5M4 8V6.5M4 8h1.5M4 6.5V5a1 1 0 0 1 1-1h1.5M4 6.5 6.5 4m-1 4L8 5.5M5.5 8H8m0-2.5V8m0 0v2.5M8 8h2.5M8 10.5V12m0-1.5L10.5 8M8 12v1.5M8 12h1.5M8 12H6.5m7-4H12m0 0h-1.5M12 8V6.5M12 8v1.5m2.5 2.5H12m2.5 0L12 14.5m0-2.5H9.5m2.5 0V9.5m0 2.5v2.5M9.5 12 12 9.5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

CheckerTexture.displayName = 'CheckerTexture';
