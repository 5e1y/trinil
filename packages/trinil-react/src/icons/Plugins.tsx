import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Plugins: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M16.75 13.25v3.25m0 3.25V16.5m-3.25 0h3.25m3.25 0h-3.25m-12.5-1V18a2 2 0 0 0 2 2h2.5a2 2 0 0 0 2-2v-2.5a2 2 0 0 0-2-2h-2.5a2 2 0 0 0-2 2Zm9.25-8a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM4.56 6.44l1.88-1.88a1.5 1.5 0 0 1 2.12 0l1.88 1.88a1.5 1.5 0 0 1 0 2.12l-1.88 1.88a1.5 1.5 0 0 1-2.12 0L4.56 8.56a1.5 1.5 0 0 1 0-2.12Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Plugins.displayName = 'Plugins';
