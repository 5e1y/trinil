import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const GameController: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M8 7.5v2m0 0v2m0-2H6m2 0h2m6-2V8m2 1.25v.5m-4-.5v.5M16 11v.5M4.422 7.412l-1.474 7.737a2.285 2.285 0 0 0 3.86 2.043l2.9-2.9a1 1 0 0 1 .706-.292h3.172a1 1 0 0 1 .707.293l2.9 2.899a2.285 2.285 0 0 0 3.86-2.043l-1.475-7.737a.96.96 0 0 0-.43-.64 13.52 13.52 0 0 0-14.295 0 .96.96 0 0 0-.431.64Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

GameController.displayName = 'GameController';
