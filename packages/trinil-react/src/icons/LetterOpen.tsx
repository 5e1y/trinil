import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LetterOpen: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="m5 10.222 6.479 3.96a1 1 0 0 0 1.043 0L19 10.221m-14 0V8m0 2.222-1.85-1.13M19 10.222V8m0 2.222 1.85-1.13M19 8V6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v2m14 0 1.447.724c.17.084.307.213.403.368M5 8l-1.447.724a1 1 0 0 0-.403.368m17.7 0c.096.155.15.336.15.526V18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.618a1 1 0 0 1 .15-.526"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

LetterOpen.displayName = 'LetterOpen';
