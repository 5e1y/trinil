import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const GitFork: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M12 17v-3m0 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0-3a2 2 0 0 1 2-2h1a2 2 0 0 0 2-2V7m-5 7a2 2 0 0 0-2-2H9a2 2 0 0 1-2-2V7m10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM7 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

GitFork.displayName = 'GitFork';
