import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const CastAudio: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M10.94 13.06a1.5 1.5 0 1 1 2.12 0m-3.888 1.768a4 4 0 1 1 5.656 0m-7.424 1.768a6.5 6.5 0 1 1 9.192 0m-10.96 1.768a9 9 0 1 1 12.728 0M16.759 20.5H7.24a.1.1 0 0 1-.07-.17l4.122-4.123a1 1 0 0 1 1.414 0l4.122 4.122a.1.1 0 0 1-.07.171Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

CastAudio.displayName = 'CastAudio';
