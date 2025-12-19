import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Heart: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M16.501 4.58c4.686 0 8.889 7.716-3.983 15.609a1 1 0 0 1-1.033 0c-12.875-7.893-8.67-15.61-3.983-15.61 2.574 0 4.044 1.784 4.41 2.29.042.06.136.06.18 0 .364-.506 1.833-2.29 4.41-2.29Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Heart.displayName = 'Heart';
