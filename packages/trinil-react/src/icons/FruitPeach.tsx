import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const FruitPeach: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M13.737 7.734C16.43 7.234 20 9.07 20 13.5c0 5.487-4.48 7.49-7.976 6.507a.1.1 0 0 0-.049-.002C7.487 20.994 4 18.99 4 13.5c0-5.5 5.5-7 8-5m1.737-.766c-.651.12-1.25.377-1.737.766m1.737-.766c2.046-1.296 2.643-3.428 2.287-4.656a.1.1 0 0 0-.107-.067C13.03 3.409 12.18 5.482 12 7.076m1.737.658A6.6 6.6 0 0 1 12 8.5m0 0V7.076M12 8.5a6.2 6.2 0 0 1 0-1.424M12 8.5c-3.645 3.24-2.04 7.137-1.3 8.5M12 7.076V3"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

FruitPeach.displayName = 'FruitPeach';
