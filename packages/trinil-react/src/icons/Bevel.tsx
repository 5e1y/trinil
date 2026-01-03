import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Bevel: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M3 10.5v4.389a1.5 1.5 0 0 0 .744 1.295l7.5 4.375a1.5 1.5 0 0 0 .756.204M3 10.5l9 5.25M3 10.5l3.368-3.75M12 20.764c.261 0 .522-.069.756-.205l7.5-4.375A1.5 1.5 0 0 0 21 14.888V10.5m-9 10.264V15.75m0 0 9-5.25m-9 5.25v-5.723m9 .473-3.368-3.75M12 10.027l5.632-3.277M12 10.027 6.368 6.75m11.264 0L12 3.473 6.368 6.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Bevel.displayName = 'Bevel';
