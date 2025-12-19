import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Store: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M15.125 8.5c0 1.519 1.606 3 3.125 3q.392-.001.75-.104M15.125 8.5c0 1.519-1.606 3-3.125 3s-3.125-1.481-3.125-3m6.25 0-.145-.257A7.64 7.64 0 0 1 14 4.5m-5.125 4c0 1.519-1.606 3-3.125 3q-.392-.001-.75-.104M8.875 8.5l.144-.257A7.64 7.64 0 0 0 10 4.5m9 6.897a2.75 2.75 0 0 0 2-2.647.63.63 0 0 0-.174-.43 7 7 0 0 1-1.742-3.4.52.52 0 0 0-.512-.42H14m5 6.897V18.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V16a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7.103m0 0A2.75 2.75 0 0 1 3 8.75c0-.16.065-.313.174-.43a7 7 0 0 0 1.742-3.4.52.52 0 0 1 .512-.42H10m4 0h-4"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Store.displayName = 'Store';
