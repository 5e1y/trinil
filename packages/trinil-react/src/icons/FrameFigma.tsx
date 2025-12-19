import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const FrameFigma: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M9.5 5H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h5.5a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM20 7h-5.5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1H20a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

FrameFigma.displayName = 'FrameFigma';
