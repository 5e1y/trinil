import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Instance: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m20.69 10.94-7.63-7.63a1.5 1.5 0 0 0-2.12 0l-7.63 7.63a1.5 1.5 0 0 0 0 2.12l7.63 7.63a1.5 1.5 0 0 0 2.12 0l7.63-7.63a1.5 1.5 0 0 0 0-2.12"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Instance.displayName = 'Instance';
