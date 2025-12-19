import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const SnapVertex: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M6 19.5A1.5 1.5 0 1 1 4.5 18M6 19.5A1.5 1.5 0 0 0 4.5 18M6 19.5h5.5m-7-1.5v-5.5m7 7a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm-7-7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm10.44-2.025-1.698 1.697a.1.1 0 0 0 0 .141L15.93 15a.1.1 0 0 0 .142 0l1.697-1.697m-2.829-2.828 1.415-1.414a1 1 0 0 0-1.415-1.415l-1.414 1.415m1.414 1.414 2.829 2.828m0 0 1.767-1.767a5 5 0 1 0-7.07-7.072l-1.768 1.768m2.828 2.829-1.697 1.697a.1.1 0 0 1-.141 0L9 8.07a.1.1 0 0 1 0-.142l1.697-1.697m2.828 2.829-2.828-2.829"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

SnapVertex.displayName = 'SnapVertex';
