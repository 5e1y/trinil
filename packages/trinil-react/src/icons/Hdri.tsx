import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Hdri: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M21 16a9 9 0 1 0-18 0m18 0c0 1.657-4.03 3.5-9 3.5S3 17.657 3 16m18 0c0-1.657-4.03-3-9-3s-9 1.343-9 3m9-11.5v-1m5.75 2.538.5-.866m-12.49 0 .5.866"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Hdri.displayName = 'Hdri';
