import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BoneDouble: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M18.719 5.281q.199-.03.406-.031a2.625 2.625 0 1 1-1.856 4.481L15 12m3.719-6.719q.03-.198.031-.406a2.625 2.625 0 1 0-4.481 1.856L12 9m6.719-3.719a2.63 2.63 0 0 0-1.775 1.132M5.281 18.72q-.198.03-.406.031a2.625 2.625 0 1 1 1.856-4.481L9 12m-3.719 6.719q-.03.199-.031.406a2.625 2.625 0 1 0 4.481-1.856L12 15m-6.719 3.719a2.63 2.63 0 0 0 1.775-1.132M5.28 5.28a2.625 2.625 0 1 0 1.45 4.45L9 12M5.281 5.281a2.625 2.625 0 1 1 4.45 1.45L12 9M5.281 5.281a2.63 2.63 0 0 1 1.775 1.132M18.719 18.72q.199.03.406.031a2.625 2.625 0 1 0-1.856-4.481L15 12m3.719 6.719q.03.199.031.406a2.625 2.625 0 1 1-4.481-1.856L12 15m6.719 3.719a2.63 2.63 0 0 1-1.775-1.132M12 9l-3 3m3 3 3-3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
BoneDouble.displayName = 'BoneDouble';
