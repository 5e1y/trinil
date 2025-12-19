import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Advertisement: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M10.88 13.5 9.765 9.464a1.313 1.313 0 0 0-2.532 0L6.121 13.5m4.758 0H6.121m4.758 0 .483 1.75M6.121 13.5l-.483 1.75M14 9.75v4.5a1 1 0 0 0 1 1h.25a3.25 3.25 0 0 0 0-6.5H15a1 1 0 0 0-1 1ZM21 6v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Advertisement.displayName = 'Advertisement';
