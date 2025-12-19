import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const StickyNote: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M10 19.91a1 1 0 0 0 .414.09H19a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v8.586a1 1 0 0 0 .09.414M10 19.91a1 1 0 0 1-.293-.203l-5.414-5.414A1 1 0 0 1 4.09 14M10 19.91V15a1 1 0 0 0-1-1H4.09"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

StickyNote.displayName = 'StickyNote';
