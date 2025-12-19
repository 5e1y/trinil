import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Ram: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M4 14v1.9a.1.1 0 0 0 .1.1h5.8a.1.1 0 0 0 .1-.1V14m-6 0h6m-6 0a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1m-10 0h2m8 0v1.9a.1.1 0 0 1-.1.1h-7.8a.1.1 0 0 1-.1-.1V14m8 0h-8"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Ram.displayName = 'Ram';
