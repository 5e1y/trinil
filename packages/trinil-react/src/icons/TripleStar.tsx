import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const TripleStar: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M6.91 12.682a.1.1 0 0 1 .18 0l1.085 2.2 2.428.353a.1.1 0 0 1 .056.17l-1.757 1.713.415 2.418a.1.1 0 0 1-.145.106L7 18.5l-2.172 1.142a.1.1 0 0 1-.145-.106l.415-2.418-1.757-1.713a.1.1 0 0 1 .055-.17l2.428-.353zM16.91 12.682a.1.1 0 0 1 .18 0l1.085 2.2 2.428.353a.1.1 0 0 1 .056.17l-1.757 1.713.415 2.418a.1.1 0 0 1-.145.106L17 18.5l-2.172 1.142a.1.1 0 0 1-.145-.106l.415-2.418-1.757-1.713a.1.1 0 0 1 .055-.17l2.428-.353zM11.91 3.682a.1.1 0 0 1 .18 0l1.085 2.2 2.428.353a.1.1 0 0 1 .056.17l-1.757 1.713.415 2.418a.1.1 0 0 1-.145.106L12 9.5l-2.172 1.142a.1.1 0 0 1-.145-.106l.415-2.418L8.34 6.405a.1.1 0 0 1 .055-.17l2.428-.353z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

TripleStar.displayName = 'TripleStar';
