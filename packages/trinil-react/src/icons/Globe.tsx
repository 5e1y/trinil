import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Globe: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75M2.25 12c0 5.385 4.365 9.75 9.75 9.75M2.25 12H7.5M12 2.25c5.385 0 9.75 4.365 9.75 9.75M12 2.25c-2.485 0-4.5 4.365-4.5 9.75M12 2.25c2.485 0 4.5 4.365 4.5 9.75M12 21.75c5.385 0 9.75-4.365 9.75-9.75M12 21.75c-2.485 0-4.5-4.365-4.5-9.75m4.5 9.75c2.485 0 4.5-4.365 4.5-9.75m5.25 0H16.5m-9 0h9"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Globe.displayName = 'Globe';
