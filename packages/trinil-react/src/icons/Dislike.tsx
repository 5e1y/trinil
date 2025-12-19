import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Dislike: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M16.463 4.5H6.581a1 1 0 0 0-.894.553L4.305 7.817A12.7 12.7 0 0 0 3.003 12.5c-.044.55.408 1 .96 1H8.11a1 1 0 0 1 .956 1.293L8.2 17.611a1.85 1.85 0 0 0 1.353 2.344c.26.058.517-.06.704-.248l6.207-6.207m0-9h3.5a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-3.5m0-9v9"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Dislike.displayName = 'Dislike';
