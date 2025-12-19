import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Nozzle: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M8 11H5.1a.1.1 0 0 0-.1.1v5.852a.1.1 0 0 0 .038.078l4.935 3.948a.1.1 0 0 0 .062.022h3.93a.1.1 0 0 0 .062-.022l4.935-3.948a.1.1 0 0 0 .038-.078V11.1a.1.1 0 0 0-.1-.1H16m-8 0V3.1a.1.1 0 0 1 .1-.1h7.8a.1.1 0 0 1 .1.1V11m-8 0h8m-9 0 10-2M7 8.5l10-2M7 6l10-2"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Nozzle.displayName = 'Nozzle';
