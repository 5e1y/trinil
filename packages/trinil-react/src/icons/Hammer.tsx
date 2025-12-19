import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Hammer: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="m10.5 7.5 10.293 10.293a1 1 0 0 1 0 1.414l-1.086 1.086a1 1 0 0 1-1.414 0L8 10m2.5-2.5L8 10m2.5-2.5a2 2 0 0 1 2-2 1 1 0 1 0 0-2H7.914a1 1 0 0 0-.707.293l-2.51 2.51a.67.67 0 0 0-.197.476 1 1 0 0 1-.684.949l-.592.197a1 1 0 0 0-.39.242l-.263.262a.1.1 0 0 0 0 .142l3.358 3.358a.1.1 0 0 0 .142 0l.262-.262a1 1 0 0 0 .242-.39l.197-.593A1 1 0 0 1 7.721 10H8"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Hammer.displayName = 'Hammer';
