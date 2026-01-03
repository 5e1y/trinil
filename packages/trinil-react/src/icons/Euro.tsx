import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Euro: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M18 7.5v-.375a4.875 4.875 0 1 0-9.75 0V9.75m0 0v4.5m0-4.5H6m2.25 0h6m-6 4.5v2.625a4.875 4.875 0 1 0 9.75 0V16.5m-9.75-2.25H6m2.25 0h6"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Euro.displayName = 'Euro';
