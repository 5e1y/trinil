import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ImagePicture: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M5 12V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v10M5 12v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6M5 12h1.549c1.57 0 3.074.623 4.184 1.733a5.92 5.92 0 0 0 7.229.89L19 14m-7-6a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

ImagePicture.displayName = 'ImagePicture';
