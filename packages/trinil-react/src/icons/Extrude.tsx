import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Extrude: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m12 6.75 6.75 3.75M12 6.75 5.113 10.5M12 6.75v3.75m0-3.75v-4.5m6.75 8.25L12 14.25m6.75-3.75V18L12 21.75m0-7.5L5.113 10.5M12 14.25v7.5M5.113 10.5V18L12 21.75m0-19.5 2.25 2.25M12 2.25 9.75 4.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Extrude.displayName = 'Extrude';
