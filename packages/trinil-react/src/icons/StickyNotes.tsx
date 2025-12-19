import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const StickyNotes: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M6 4.5a1 1 0 0 1 1-1h12.5a1 1 0 0 1 1 1V16a1 1 0 0 1-1 1m-10 3.41a1 1 0 0 0 .414.09H16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H4.5a1 1 0 0 0-1 1v6.086a1 1 0 0 0 .09.414m5.91 5.91a1 1 0 0 1-.293-.203l-5.414-5.414a1 1 0 0 1-.203-.293m5.91 5.91V15.5a1 1 0 0 0-1-1H3.59"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

StickyNotes.displayName = 'StickyNotes';
