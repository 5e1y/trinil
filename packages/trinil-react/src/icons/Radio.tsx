import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Radio: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M12 10.5A.75.75 0 1 1 12 9a.75.75 0 0 1 0 1.5m0 0v11.25m2.652-9.349A3.74 3.74 0 0 0 15.75 9.75c0-1.036-.42-1.973-1.098-2.652m-5.304 5.303A3.74 3.74 0 0 1 8.25 9.75c0-1.036.42-1.973 1.098-2.652m9.546 9.546A9.72 9.72 0 0 0 21.75 9.75a9.72 9.72 0 0 0-2.856-6.895m-2.121 11.668A6.73 6.73 0 0 0 18.75 9.75a6.73 6.73 0 0 0-1.977-4.773M5.106 16.644A9.72 9.72 0 0 1 2.25 9.75a9.72 9.72 0 0 1 2.856-6.895m2.121 11.668A6.73 6.73 0 0 1 5.25 9.75c0-1.864.756-3.552 1.977-4.773"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Radio.displayName = 'Radio';
