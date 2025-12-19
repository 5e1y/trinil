import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ParticleSystem: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M17.5 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 0h-8m-3 11a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0 0v-8m8.879 5.879a3 3 0 1 0 4.243 4.243 3 3 0 0 0-4.243-4.243Zm0 0L8.62 8.62M9.5 6.5a3 3 0 1 0-3 3m3-3a3 3 0 0 1-.879 2.121M6.5 9.5a3 3 0 0 0 2.121-.879"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

ParticleSystem.displayName = 'ParticleSystem';
