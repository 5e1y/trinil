import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Trophy: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M17 4V3H7v1m10 0v5a4.98 4.98 0 0 1-1 3m1-8a3.62 3.62 0 0 1 3.602 3.98l-.03.306c-.048.472-.18.931-.393 1.356l-.023.046A4.18 4.18 0 0 1 16.416 12H16M7 4v5c0 1.126.372 2.164 1 3M7 4a3.62 3.62 0 0 0-3.602 3.98l.03.306c.048.472.18.931.393 1.356l.023.046A4.18 4.18 0 0 0 7.584 12H8m0 0a5 5 0 0 0 4 2m0 0a5 5 0 0 0 4-2m-4 2v7m0 0h5m-5 0H7"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Trophy.displayName = 'Trophy';
