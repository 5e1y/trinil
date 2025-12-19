import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Coffee: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="m17.684 9 .306-1.454A.453.453 0 0 0 17.547 7H3.453a.453.453 0 0 0-.443.546l1.489 7.072A3 3 0 0 0 7.434 17h6.522c1.191 0 2.22-.834 2.465-2m1.263-6H18a3 3 0 1 1 0 6h-1.579m1.263-6-1.263 6"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Coffee.displayName = 'Coffee';
