import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const SoundWave: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M3 8s0 9 1.5 9S6 6 7.5 6s1.5 14 3 14 1.5-16 3-16 1.5 14 3 14 1.5-11 3-11 1.5 9 1.5 9"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

SoundWave.displayName = 'SoundWave';
