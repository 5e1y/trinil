import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LabFlask: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M14.5 9V5.303a1 1 0 0 1 .168-.555l.768-1.151a.383.383 0 0 0-.32-.597H7.884a.384.384 0 0 0-.32.597l.768 1.151a1 1 0 0 1 .168.555V9.73a1 1 0 0 1-.136.503l-2.828 4.848A3.936 3.936 0 0 0 8.936 21h6.314a3.751 3.751 0 0 0 3-6l-3.55-4.733a1 1 0 0 1-.2-.6zm0 0h-2m0 3h2m-2 3h2m-2 3h2"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

LabFlask.displayName = 'LabFlask';
