import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const CloudSun: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M12.535 14a4 4 0 0 1 2.375-1.85m-4.91.385a4.013 4.013 0 0 0-2.899-.434m7.809.05Q15.43 12 16 12a4 4 0 0 1 0 8H8a4 4 0 0 1-.899-7.899m7.809.05A4.001 4.001 0 0 0 7.1 12.1M18.5 9.5V11m-4-5.5H13m2.5 3-1 1m2-4a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

CloudSun.displayName = 'CloudSun';
