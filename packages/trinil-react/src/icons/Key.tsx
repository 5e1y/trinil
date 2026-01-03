import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Key: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M2.25 16.5a5.25 5.25 0 0 1 7.147-4.897L18.75 2.25 21 4.5 19.5 6l2.25 2.25-2.25 2.25-2.25-2.25-5.364 5.364A5.25 5.25 0 1 1 2.25 16.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Key.displayName = 'Key';
