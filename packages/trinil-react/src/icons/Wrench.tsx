import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Wrench: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M8.03 5.03 6 3s3-1.5 5.25.75S12 9 12 9l9.129 9.128a2.121 2.121 0 0 1-3 3L9 12s-3 1.5-5.25-.75S3 6 3 6l2.03 2.03c.141.14.332.22.53.22H7.5a.75.75 0 0 0 .75-.75V5.56a.75.75 0 0 0-.22-.53"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Wrench.displayName = 'Wrench';
