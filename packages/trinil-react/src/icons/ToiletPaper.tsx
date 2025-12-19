import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ToiletPaper: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M7 16c1.38 0 2.5-2.686 2.5-6S8.38 4 7 4m0 12c-1.38 0-2.5-2.686-2.5-6M7 16h10.5m-13-6c0-3.314 1.12-6 2.5-6m-2.5 6v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-3M7 4h10.5c1.38 0 2.5 2.686 2.5 6s-1.12 6-2.5 6m-10-6c0 .828-.224 1.5-.5 1.5s-.5-.672-.5-1.5.224-1.5.5-1.5.5.672.5 1.5Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

ToiletPaper.displayName = 'ToiletPaper';
