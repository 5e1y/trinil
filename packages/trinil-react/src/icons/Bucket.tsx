import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Bucket: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M8.5 13a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 0c0-7.5 1.527-10.03 3.433-10.066C13.892 2.897 15 6.5 15 9m3.54 0H5.46a.46.46 0 0 0-.453.54L6.856 20.17a1 1 0 0 0 .985.83h8.318a1 1 0 0 0 .985-.83l1.85-10.632A.46.46 0 0 0 18.54 9Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Bucket.displayName = 'Bucket';
