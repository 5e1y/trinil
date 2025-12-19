import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Timer: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M18 19h1.5a.5.5 0 0 0 .5-.5l-.55-8.515a7.466 7.466 0 0 0-14.9 0L4 18.5a.5.5 0 0 0 .5.5H6m12 0v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1m12 0H6m6-3.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm-.5-3L14 10a1.06 1.06 0 0 0-1.5-1.5L10 11a1.06 1.06 0 0 0 1.5 1.5Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Timer.displayName = 'Timer';
