import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Play: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M7.5 18.21V5.79a1 1 0 0 1 1.524-.852l10.092 6.21a1 1 0 0 1 0 1.704l-10.092 6.21A1 1 0 0 1 7.5 18.21Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Play.displayName = 'Play';
