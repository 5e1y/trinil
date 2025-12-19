import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Material3d: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M10.447 17.795a5.98 5.98 0 0 0 4.567-.607 6 6 0 0 0 1.483-1.214m1.299-2.421a6 6 0 0 1-.15.477m3.047.3A9 9 0 1 1 3.307 9.67a9 9 0 1 1 17.386 4.66Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Material3d.displayName = 'Material3d';
