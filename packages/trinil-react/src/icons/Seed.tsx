import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Seed: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M12 12c.61-3.087 4.87-5.571 7.872-4.62a.096.096 0 0 1 .065.113C19.26 10.568 14.978 13.015 12 12Zm0 0v3m0-3V8m0 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0-7c-.61-3.087-4.87-5.57-7.872-4.62a.096.096 0 0 0-.065.113C4.74 6.568 9.02 9.015 12 8Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Seed.displayName = 'Seed';
