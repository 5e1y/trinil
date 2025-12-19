import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Signal: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M9.172 9.172a4 4 0 0 0 0 5.656m5.656-5.656a4 4 0 0 1 0 5.656M7.404 7.404a6.5 6.5 0 0 0 0 9.192m9.192-9.192a6.5 6.5 0 0 1 0 9.192m1.768-10.96a9 9 0 0 1 0 12.728M5.636 5.636a9 9 0 0 0 0 12.728m7.425-7.425a1.5 1.5 0 1 0-2.122 2.122 1.5 1.5 0 0 0 2.122-2.122Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Signal.displayName = 'Signal';
