import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ListCheck: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M10.5 12h9m-9-7h9m-9 14h9M4 5l.93.93a.1.1 0 0 0 .14 0L7.5 3.5M4 12l.93.93a.1.1 0 0 0 .14 0L7.5 10.5M4 19l.93.93a.1.1 0 0 0 .14 0L7.5 17.5"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

ListCheck.displayName = 'ListCheck';
