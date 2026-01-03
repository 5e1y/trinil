import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BrightnessLow: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M12 5.25V4.5m0 14.25v.75m4.775-12.278.53-.53M7.23 16.767l-.53.53m12.059-5.305h.75m-14.25 0h-.75m12.278 4.775.53.53M7.24 7.222l-.53-.53M12 15.75a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
BrightnessLow.displayName = 'BrightnessLow';
