import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BoneDouble: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M19 5a2 2 0 1 0-3.483 1.342.104.104 0 0 1-.002.143L12 10m7-5a2 2 0 1 1-1.342 3.483.104.104 0 0 0-.143.002L14 12m5-7c0 .364-.097.706-.267 1M5 19a2 2 0 1 1 1.342-3.483c.04.037.104.037.143-.002L10 12m-5 7a2 2 0 1 0 3.483-1.342.104.104 0 0 1 .002-.143L12 14m-7 5c0-.364.097-.706.268-1M19 19a2 2 0 1 0-1.342-3.483.104.104 0 0 1-.143-.002L14 12m5 7a2 2 0 1 1-3.483-1.342.104.104 0 0 0-.002-.143L12 14m7 5c-.364 0-.706-.097-1-.267M5 5a2 2 0 1 1 3.483 1.342.104.104 0 0 0 .002.143L12 10M5 5a2 2 0 1 0 1.342 3.483.104.104 0 0 1 .143.002L10 12M5 5c.364 0 .706.097 1 .268M14 12l-2 2m-2-2 2-2"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

BoneDouble.displayName = 'BoneDouble';
