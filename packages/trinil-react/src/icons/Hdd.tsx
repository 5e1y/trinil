import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Hdd: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="m9.119 14.087-1.133 1.557a1.42 1.42 0 1 0 2.507 1.253l.609-1.977m-1.983-.833 1.552-2.135a.66.66 0 0 1 1.165.582l-.734 2.385m-1.983-.832a5 5 0 1 1 1.983.833M5 4v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Hdd.displayName = 'Hdd';
