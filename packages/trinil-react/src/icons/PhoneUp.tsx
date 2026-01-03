import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const PhoneUp: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m14.25 9.75 6-6m0 0V9m0-5.25H15M2.679 8.872c2.887 5.831 7.282 10.21 12.587 12.545 1.654.727 3.55.213 4.829-1.054.702-.696 1.216-1.528 1.536-2.137.257-.49.081-1.072-.37-1.395l-2.825-2.024a1.245 1.245 0 0 0-1.599.126l-.858.85a.26.26 0 0 1-.317.035 24.6 24.6 0 0 1-7.584-7.511.25.25 0 0 1 .035-.314l.86-.853a1.215 1.215 0 0 0 .13-1.58L7.04 2.716c-.283-.39-.77-.578-1.219-.397A6.6 6.6 0 0 0 3.67 3.738c-1.374 1.36-1.847 3.407-.991 5.134"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
PhoneUp.displayName = 'PhoneUp';
