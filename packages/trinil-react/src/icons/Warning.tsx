import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Warning: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M12 16.5v.75m0-3.75V9m-1.322-5.053-8.019 14.84A1.5 1.5 0 0 0 3.98 21h16.01a1.5 1.5 0 0 0 1.32-2.211l-7.99-14.84c-.567-1.051-2.074-1.053-2.641-.002"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Warning.displayName = 'Warning';
