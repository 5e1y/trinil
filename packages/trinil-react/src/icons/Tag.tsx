import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Tag: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M11.793 19.793a1 1 0 0 0 1.414 0l6.586-6.586a1 1 0 0 0 0-1.414l-7.5-7.5A1 1 0 0 0 11.586 4H7a3 3 0 0 0-3 3v4.586a1 1 0 0 0 .293.707z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Tag.displayName = 'Tag';
