import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Needle: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M17.328 6.623C16.495 7.789 12.5 12 8.5 10.5S4.5 5 7.002 3m11.996 6c.667 1 1.902 3.7 1.502 6.5-.463 3.245-2.05 5.796-4.426 4.004m0 0A5.5 5.5 0 0 1 15.5 19c-1-1-1.502-5 .5-5 1.302 0 1.967 3.804.074 5.504Zm0 0c-1.018.915-2.777 1.22-5.576-.004m8.104-10.198L3.078 21.062c-.093.07-.21-.047-.14-.14l11.76-15.524Q15 5 15.4 4.7l.378-.283a2.718 2.718 0 0 1 3.805 3.805L19.3 8.6a3.6 3.6 0 0 1-.698.702ZM17.5 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Needle.displayName = 'Needle';
