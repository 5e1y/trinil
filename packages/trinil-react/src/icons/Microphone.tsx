import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Microphone: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M6 10.5V12a6 6 0 0 0 6 6m6-7.5V12a6 6 0 0 1-6 6m0 0v3m0 0h4m-4 0H8m7.5-14.5V12a3.5 3.5 0 1 1-7 0V6.5a3.5 3.5 0 1 1 7 0Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Microphone.displayName = 'Microphone';
