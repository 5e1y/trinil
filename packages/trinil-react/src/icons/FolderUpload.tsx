import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const FolderUpload: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M21 14V8.5a1 1 0 0 0-1-1h-7.654A1.99 1.99 0 0 1 10.5 6.25 1.99 1.99 0 0 0 8.654 5H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9.1m7.9-5a4.98 4.98 0 0 0-3-1m3 1c1.214.912 2 2.364 2 4m-9.9 1a5 5 0 0 0 4.9 4m-4.9-4a5 5 0 0 1-.1-1m10 0a5 5 0 0 1-5 5m5-5a5 5 0 0 0-5-5m0 10a5 5 0 0 1-5-5m0 0a5 5 0 0 1 5-5m0 7.5v-5m0 0 2 2m-2-2-2 2"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

FolderUpload.displayName = 'FolderUpload';
