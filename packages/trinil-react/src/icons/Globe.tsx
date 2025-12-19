import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Globe: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M12 21C7.229 15.948 7.229 8.052 12 3m0 18a9 9 0 0 1-9-9m9 9a9 9 0 0 0 9-9m-9 9c4.77-5.052 4.77-12.948 0-18m0 0a9 9 0 0 0-9 9m9-9a9 9 0 0 1 9 9M3 12h18"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Globe.displayName = 'Globe';
