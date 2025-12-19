import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Debug: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M7.5 11v2m0-2a2 2 0 0 1 2-2m-2 2A1.5 1.5 0 0 1 6 9.5V6m1.5 7v2m0-2h-.801a3 3 0 0 1-2.573-1.457L3.5 10.5m4 4.5v1.5a4.5 4.5 0 0 0 6.256 4.145M7.5 15a9.5 9.5 0 0 0-3.276 5.106L4 21M9.5 9V7.5c0-.818.393-1.544 1-2M9.5 9h5m0 0V7.5c0-.818-.393-1.544-1-2m1 3.5a2 2 0 0 1 2 2M18 6v3.5a1.5 1.5 0 0 1-1.5 1.5m0 2v-2m0 2h.801a3 3 0 0 0 2.573-1.457L20.5 10.5m-4 2.5v.229m-3-7.73A2.5 2.5 0 0 0 12 5c-.563 0-1.082.186-1.5.5m3 0 2-2m-5 2-2-2m10.414 15.414a2 2 0 1 1-2.828-2.828 2 2 0 0 1 2.828 2.828Zm0 0L20 20m-3.5-6.771a5 5 0 1 1-2.744 7.416m2.744-7.416a5.002 5.002 0 0 0-2.744 7.416"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Debug.displayName = 'Debug';
