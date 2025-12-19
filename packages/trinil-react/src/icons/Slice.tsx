import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Slice: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="m6.15 13.75-2.993-1.662a.1.1 0 0 1 0-.175L6.15 10.25m0 3.5 5.801 3.223a.1.1 0 0 0 .098 0l5.801-3.223m-11.7 0-2.993 1.663a.1.1 0 0 0 0 .175l8.794 4.885a.1.1 0 0 0 .098 0l8.794-4.885a.1.1 0 0 0 0-.175L17.85 13.75m0 0 2.993-1.662a.1.1 0 0 0 0-.175L17.85 10.25m0 0-5.802 3.223a.1.1 0 0 1-.097 0L6.15 10.25m11.7 0 2.993-1.662a.1.1 0 0 0 0-.175l-8.794-4.886a.1.1 0 0 0-.098 0L3.157 8.413a.1.1 0 0 0 0 .175L6.15 10.25"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Slice.displayName = 'Slice';
