import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const FilmRoll: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M11 8V7a1 1 0 0 0-1-1h-.91A.09.09 0 0 1 9 5.91.91.91 0 0 0 8.09 5H5.91a.91.91 0 0 0-.91.91c0 .05-.04.09-.09.09H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1m0-9H8a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h3m0-9h2c.552 0 .987.455 1.123.99A4 4 0 0 0 18 12h.667A2.333 2.333 0 0 1 21 14.333V16a1 1 0 0 1-1 1h-9"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

FilmRoll.displayName = 'FilmRoll';
