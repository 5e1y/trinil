import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ServerAlt: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M13 8v.5m3-.5v.5m-3 7v.5m3-.5v.5M5 17.75a2 2 0 1 1 0-4m0 4a2 2 0 0 0 2-2m-2 2V20m2-4.25a2 2 0 0 0-2-2m2 2h3m-5-2v-3.5m5 5.5v1.75a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V14a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zm0-7.5V10a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V6.5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zm0 0H7m-2 2a2 2 0 1 1 0-4m0 4a2 2 0 0 0 2-2m0 0a2 2 0 0 0-2-2m0 0V4"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

ServerAlt.displayName = 'ServerAlt';
