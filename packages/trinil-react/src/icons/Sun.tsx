import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Sun: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M12 5V2m7 10h3m-10 7v3M5 12H2m15-5 2.071-2.071M17 17l2.071 2.071M7 17l-2.071 2.071M7 7 4.929 4.929M16 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Sun.displayName = 'Sun';
