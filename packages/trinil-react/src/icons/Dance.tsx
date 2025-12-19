import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Dance: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M12 8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0 0V15m0-6.5 1.524 1.83a1.138 1.138 0 0 0 1.821-.098l.077-.115a1.59 1.59 0 0 1 2.078-.522M12 8.5l-1.68 2.016a.838.838 0 0 1-1.393-.162l-.047-.093A1.59 1.59 0 0 0 7 9.447M12 15l-.949 2.846a1 1 0 0 0-.051.316V21.5m1-6.5 2.09.836a1 1 0 0 1 .565.577l1.158 3.087"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Dance.displayName = 'Dance';
