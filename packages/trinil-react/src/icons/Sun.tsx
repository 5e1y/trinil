import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Sun: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M12 2.25V4.5m0 17.25V19.5m6.897-14.4-1.591 1.591M5.107 18.89l1.59-1.591m15.06-5.305h-2.25m-17.25 0h2.25m14.4 6.896-1.592-1.59M5.12 5.1l1.59 1.59M7.5 12a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Sun.displayName = 'Sun';
