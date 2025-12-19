import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Crown: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M3 10.042V17a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-6.958a.1.1 0 0 0-.03-.071l-2.9-2.9a.1.1 0 0 0-.14 0L15.07 9.93a.1.1 0 0 1-.14 0l-2.86-2.86a.1.1 0 0 0-.14 0L9.07 9.93a.1.1 0 0 1-.14 0L6.07 7.07a.1.1 0 0 0-.14 0l-2.9 2.9a.1.1 0 0 0-.03.072Zm7.25 3.708a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0Z" clip-rule="evenodd"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Crown.displayName = 'Crown';
