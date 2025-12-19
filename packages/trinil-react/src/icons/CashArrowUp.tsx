import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const CashArrowUp: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M18 20.5v-5m0 0 2 2m-2-2-2 2m5-3.5a5 5 0 0 0-7.975 3.5M21 14a5 5 0 1 1-7.975 3.5M21 14V7.5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9.025M12 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm6.5 2.5a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0ZM7 12a.75.75 0 1 0-1.5 0A.75.75 0 0 0 7 12Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

CashArrowUp.displayName = 'CashArrowUp';
