import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Camera: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M20 19H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2.882c.685 0 1.312-.387 1.618-1s.933-1 1.618-1h3.764c.685 0 1.312.387 1.618 1s.933 1 1.618 1H20a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1Z"/><path d="M16 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Camera.displayName = 'Camera';
