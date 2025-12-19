import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Bandage: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M4.5 19.5a4.243 4.243 0 0 0 6 0l9-9a4.243 4.243 0 0 0-6-6l-9 9a4.243 4.243 0 0 0 0 6Zm10.793-9.207-1.586-1.586a1 1 0 0 0-1.415 0l-3.585 3.585a1 1 0 0 0 0 1.415l1.586 1.586a1 1 0 0 0 1.414 0l3.586-3.586a1 1 0 0 0 0-1.414Z" clip-rule="evenodd"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Bandage.displayName = 'Bandage';
