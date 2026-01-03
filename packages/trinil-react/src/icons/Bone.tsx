import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Bone: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M18.719 5.281q.199-.03.406-.031a2.625 2.625 0 1 1-1.856 4.481L9.73 17.27a2.625 2.625 0 1 1-4.45 1.45M18.72 5.28q.03-.198.031-.406a2.625 2.625 0 1 0-4.481 1.856L6.73 14.27a2.625 2.625 0 1 0-1.45 4.45M18.72 5.28a2.63 2.63 0 0 0-1.775 1.132M5.281 18.72a2.63 2.63 0 0 0 1.775-1.132"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Bone.displayName = 'Bone';
