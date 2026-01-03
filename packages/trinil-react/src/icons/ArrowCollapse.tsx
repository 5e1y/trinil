import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ArrowCollapse: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M12 21.75V15m0 0-3.75 3.75M12 15l3.75 3.75M3.75 12h16.5M12 2.25V9m0 0L8.25 5.25M12 9l3.75-3.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
ArrowCollapse.displayName = 'ArrowCollapse';
