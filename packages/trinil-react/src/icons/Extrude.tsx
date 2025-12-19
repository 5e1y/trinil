import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Extrude: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="m12 3-1.5 1.5M12 3l1.5 1.5M12 3v7m0 4-3-1.75-2.875-1.66M12 14l3-1.75 2.875-1.66M12 14v6.828M6.125 10.59a1 1 0 0 1 .371-.38l5-2.916a1 1 0 0 1 1.008 0l5 2.917a1 1 0 0 1 .37.38m-11.749 0a1 1 0 0 0-.125.483v5.85a1 1 0 0 0 .498.865l5 2.904a1 1 0 0 0 .502.135m5.875-10.238a1 1 0 0 1 .125.484v5.85a1 1 0 0 1-.498.865l-4.999 2.904a1 1 0 0 1-.503.135"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Extrude.displayName = 'Extrude';
