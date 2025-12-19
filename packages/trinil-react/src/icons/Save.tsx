import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Save: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M7 20H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h9.586a1 1 0 0 1 .707.293l4.414 4.414a1 1 0 0 1 .293.707V19a1 1 0 0 1-1 1h-2M7 20v-6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6M7 20h10"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Save.displayName = 'Save';
