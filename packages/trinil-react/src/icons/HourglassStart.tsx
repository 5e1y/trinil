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
      dangerouslySetInnerHTML={{ __html: `<path d="M7.225 6h9.184c.201 0 .364.163.364.365a.21.21 0 0 1-.123.19L15 7.11a3.04 3.04 0 0 0-1.383 1.218c-.509.849-2.295.993-2.995.293l-.402-.402a4 4 0 0 0-.47-.4c-.739-.538-1.638-.81-2.452-1.227q-.034-.016-.07-.03A.36.36 0 0 1 7 6.225C7 6.101 7.1 6 7.225 6Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

HourglassStart.displayName = 'HourglassStart';
