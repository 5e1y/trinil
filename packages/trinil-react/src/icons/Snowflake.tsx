import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Snowflake: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M12 17.5V21m0-3.5L9.5 20m2.5-2.5 2.5 2.5M12 17.5v-11m0 0V3m0 3.5L14.5 4M12 6.5 9.5 4M7.237 14.75 4.206 16.5m3.03-1.75-3.414-.915m3.415.915-.915 3.415m.915-3.415 9.526-5.5m0 0 3.031-1.75m-3.03 1.75 3.414.915m-3.415-.915.915-3.415M7.237 9.25 4.206 7.5m3.03 1.75-.914-3.415m.915 3.415-3.415.915m3.415-.915L12 12l4.763 2.75m0 0 3.031 1.75m-3.03-1.75.914 3.415m-.915-3.415 3.415-.915"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Snowflake.displayName = 'Snowflake';
