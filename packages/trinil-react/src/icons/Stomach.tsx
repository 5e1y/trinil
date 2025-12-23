import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Stomach: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M11.5 3.5v1.257a3 3 0 0 0 .879 2.122c.606.606.522 1.619-.25 1.99a9.5 9.5 0 0 1-4.611.922l-.316-.017c-2.601-.137-4.605 2.262-4.009 4.797l.085.358c.16.68.481 1.29.92 1.792.182.21.302.47.302.749v3.03m10-17v.672a2 2 0 0 0 .586 1.414c.548.548 1.353.713 2.124.782a3.6 3.6 0 0 1 2.653 1.545l.241.349c1.098 1.585.881 3.753-.482 5.116C16.68 16.32 12.69 18.05 8.554 18.17c-.566.016-1.036.467-1.036 1.033V20.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Stomach.displayName = 'Stomach';
