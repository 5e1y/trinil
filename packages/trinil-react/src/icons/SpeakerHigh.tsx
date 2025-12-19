import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const SpeakerHigh: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M18.318 6c3.576 3.314 3.576 8.686 0 12M14 8.667c1.987 1.84 1.987 4.825 0 6.666m2.159-8c2.782 2.578 2.782 6.756 0 9.334M6.25 8.75a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0ZM7.5 12.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3 18V6a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

SpeakerHigh.displayName = 'SpeakerHigh';
