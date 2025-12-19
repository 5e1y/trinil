import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Biohazard: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M14.728 17.843a5.45 5.45 0 0 0 2.726-4.725m-10.909 0a5.45 5.45 0 0 0 2.727 4.725m0-9.45A5.43 5.43 0 0 1 12 7.663a5.43 5.43 0 0 1 2.728.73m4.39 11.39a4.547 4.547 0 0 1-6.627-5.247m8.9 1.31a4.547 4.547 0 0 0-7.925-3.042m-8.585 6.979a4.547 4.547 0 0 0 6.627-5.247m-8.9 1.31a4.547 4.547 0 0 1 7.925-3.042m-.806-9.077a4.547 4.547 0 0 0 1.19 8.353m3.356-8.353a4.547 4.547 0 0 1-1.19 8.353m.384.724a1.504 1.504 0 0 1-.975 1.732m.975-1.732a1.5 1.5 0 0 0-.385-.724m-.59 2.456a1.5 1.5 0 0 1-.984 0m0 0a1.5 1.5 0 0 1-.975-1.733m0 0c.06-.277.195-.526.385-.723m0 0a1.496 1.496 0 0 1 2.164 0"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Biohazard.displayName = 'Biohazard';
