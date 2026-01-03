import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Delivery: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M20.25 18a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0m4.5 0a1.5 1.5 0 0 0 1.5-1.5v-3.335a1.5 1.5 0 0 0-.214-.771l-1.599-2.666A1.5 1.5 0 0 0 18.651 9h-2.98m.079 9h-1.5M9 18a2.25 2.25 0 0 1-4.5 0M9 18a2.25 2.25 0 0 0-4.5 0M9 18h5.25M4.5 18h-.495a1.5 1.5 0 0 1-1.481-1.734l.555-3.516m1.421-9h10.245a1.5 1.5 0 0 1 1.481 1.734L15.671 9m-1.421 9 1.421-9M8.25 6.75H3m-.75 3H7.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Delivery.displayName = 'Delivery';
