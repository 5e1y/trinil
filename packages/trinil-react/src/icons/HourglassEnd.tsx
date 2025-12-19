import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const HourglassEnd: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M7.225 19h9.184a.365.365 0 0 0 .364-.365.21.21 0 0 0-.123-.19l-1.265-.556a3.04 3.04 0 0 1-1.383-1.218 1.52 1.52 0 0 0-2.38-.293l-.402.402a3.9 3.9 0 0 1-1.699 1l-2.257.645a.364.364 0 0 0-.264.35c0 .124.1.225.225.225Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

HourglassEnd.displayName = 'HourglassEnd';
