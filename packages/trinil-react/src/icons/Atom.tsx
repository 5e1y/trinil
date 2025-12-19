import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Atom: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M16 12c0 4.97-1.79 9-4 9s-4-4.03-4-9 1.79-9 4-9 4 4.03 4 9Z"/><path  stroke-linecap="round" stroke-width="1.5" d="M14 15.464c-4.305 2.486-8.69 2.95-9.794 1.036C3.1 14.587 5.696 11.021 10 8.536c4.305-2.485 8.69-2.949 9.794-1.036S18.304 12.98 14 15.464Z"/><path  stroke-linecap="round" stroke-width="1.5" d="M10 15.464C5.695 12.98 3.101 9.414 4.206 7.5 5.31 5.587 9.696 6.05 14 8.536s6.899 6.051 5.794 7.964c-1.104 1.913-5.49 1.45-9.794-1.036Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Atom.displayName = 'Atom';
