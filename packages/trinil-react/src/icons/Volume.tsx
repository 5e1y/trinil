import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Volume: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M16.5 18.616V5.384a.384.384 0 0 0-.597-.32l-4.151 2.768a1 1 0 0 1-.555.168H9.5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1.697a1 1 0 0 1 .555.168l4.151 2.768a.383.383 0 0 0 .597-.32Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Volume.displayName = 'Volume';
