import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Capsule: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m8.25 8.25-4.5 4.5a5.303 5.303 0 1 0 7.5 7.5l4.5-4.5m-7.5-7.5 4.5-4.5a5.303 5.303 0 1 1 7.5 7.5l-4.5 4.5m-7.5-7.5 7.5 7.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Capsule.displayName = 'Capsule';
