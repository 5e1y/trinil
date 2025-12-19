import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const HourglassStart: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M5 18.676V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1.324a5 5 0 0 0-2.227-4.16l-1.277-.852a2 2 0 0 1 0-3.328l1.277-.852A5 5 0 0 0 19 5.324V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1.324a5 5 0 0 0 2.226 4.16l1.278.852a2 2 0 0 1 0 3.328l-1.277.852A5 5 0 0 0 5 18.676Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

HourglassStart.displayName = 'HourglassStart';
