import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const FileUpload: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M23 18a5 5 0 0 1-5 5m5-5a5 5 0 0 0-4-4.9m4 4.9a5 5 0 0 0-5-5m0 10a5 5 0 0 1-4-2m4 2a5 5 0 0 1-5-5m0 0a5 5 0 0 1 5-5m-5 5c0 1.126.372 2.164 1 3m4-8q.515 0 1 .1m0 0V8.414A1 1 0 0 0 18.91 8M14 21H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.586a1 1 0 0 1 .414.09M18.91 8H15a1 1 0 0 1-1-1V3.09M18.91 8a1 1 0 0 0-.203-.293l-4.414-4.414A1 1 0 0 0 14 3.09m4 17.41v-5m0 0 2 2m-2-2-2 2"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

FileUpload.displayName = 'FileUpload';
