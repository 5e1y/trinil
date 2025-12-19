import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Shadow: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M14.914 15.086c1.259.116 2.4.344 3.346.654m-3.346-.654-5.581 5.581m5.58-5.58-.095-.01m3.442.663L13 21m5.26-5.26c1.198.392 2.08.916 2.489 1.511M13 21c1.68 0 3.239-.194 4.526-.526M13 21a19.5 19.5 0 0 1-3.667-.333m11.416-3.416c.164.24.251.49.251.749 0 1.027-1.376 1.933-3.474 2.474m3.223-3.223-3.223 3.223m-8.193.193c-1.212-.235-2.243-.582-2.995-1.005m0 0C5.493 19.186 5 18.615 5 18c0-.692.626-1.33 1.676-1.838m-.338 3.5 2.724-2.724m5.756-1.86a7 7 0 1 0-8.142 1.084m8.142-1.084a6.98 6.98 0 0 1-5.756 1.86m-2.386-.776a7 7 0 0 0 2.386.776"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Shadow.displayName = 'Shadow';
