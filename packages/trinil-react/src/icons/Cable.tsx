import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Cable: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M5 8v5.071a4.93 4.93 0 0 0 3.778 4.794M5 8a1.5 1.5 0 0 1-1.5-1.5V4.1a.1.1 0 0 1 .1-.1h2.8a.1.1 0 0 1 .1.1v2.4A1.5 1.5 0 0 1 5 8Zm14 1v6.071A4.93 4.93 0 0 1 14.071 20h-.821a5.74 5.74 0 0 1-4.472-2.135M19 9a1.5 1.5 0 0 1-1.5-1.5V5.1a.1.1 0 0 1 .1-.1h2.8a.1.1 0 0 1 .1.1v2.4A1.5 1.5 0 0 1 19 9ZM8.778 17.865A5.73 5.73 0 0 1 7.5 14.25V13a4.5 4.5 0 1 1 9 0v.25A4.75 4.75 0 0 1 11.75 18H9.929q-.597-.002-1.15-.135Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Cable.displayName = 'Cable';
