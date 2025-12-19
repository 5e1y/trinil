import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Bone: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M19 5a2 2 0 1 0-3.483 1.342.104.104 0 0 1-.002.143l-9.03 9.03a.104.104 0 0 1-.143.002A2 2 0 1 0 5 19M19 5a2 2 0 1 1-1.342 3.483.104.104 0 0 0-.143.002l-9.03 9.03a.104.104 0 0 0-.002.143A2 2 0 1 1 5 19M19 5c0 .364-.097.706-.268 1M5 19c0-.364.097-.706.268-1"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Bone.displayName = 'Bone';
