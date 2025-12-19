import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const AntennaSignal: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M14.5 5.169A5 5 0 0 1 17 9.5c0 1.688-.836 3.18-2.116 4.085M9.5 5.17A5 5 0 0 0 7 9.5c0 1.688.836 3.18 2.116 4.085m6.642-10.577A7.5 7.5 0 0 1 19.5 9.5a7.49 7.49 0 0 1-3.174 6.128M8.242 3.008A7.5 7.5 0 0 0 4.5 9.5a7.49 7.49 0 0 0 3.174 6.128m4.957-3.708a2.5 2.5 0 0 1-1.262 0m1.262 0a2.501 2.501 0 1 0-1.262 0m1.262 0 .793 3.04m-2.055-3.04-.793 3.04M9.783 18l-.456 1.748A1 1 0 0 0 10.294 21h3.412a1 1 0 0 0 .967-1.252L14.217 18m-4.434 0h4.434m-4.434 0 .793-3.04M14.217 18l-.793-3.04m0 0h-2.848"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

AntennaSignal.displayName = 'AntennaSignal';
