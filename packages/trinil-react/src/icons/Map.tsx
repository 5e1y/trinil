import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Map: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M9 17.505a.1.1 0 0 0-.032.006l-4.652 1.55A1 1 0 0 1 3 18.113V7.72a1 1 0 0 1 .684-.949l5.284-1.761A.1.1 0 0 1 9 5.005m0 12.5a.1.1 0 0 1 .032.006l5.936 1.978a.1.1 0 0 0 .032.006m-6-1.99v-12.5m0 0a.1.1 0 0 1 .032.006l5.936 1.978a.1.1 0 0 0 .032.006m0 0a.1.1 0 0 0 .032-.006l4.652-1.55A1 1 0 0 1 21 6.387V16.78a1 1 0 0 1-.684.949l-5.284 1.761a.1.1 0 0 1-.032.006m0-12.5v12.5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Map.displayName = 'Map';
