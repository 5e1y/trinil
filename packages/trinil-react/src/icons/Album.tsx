import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Album: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M17 5.674a7 7 0 0 1 0 12.652m0-12.652v12.652m0-12.652A.674.674 0 0 0 16.326 5H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12.326a.674.674 0 0 0 .674-.674M10 12.5V8.1a.1.1 0 0 1 .1-.1c1.423.022 1.945.489 3.9 0m-4 4.5v1.75a1.75 1.75 0 1 1-1.75-1.75z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Album.displayName = 'Album';
