import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Megaphone: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M11.25 15h4.046a1.5 1.5 0 0 1 .832.252l3.977 2.651a.575.575 0 0 0 .895-.479V3.576a.576.576 0 0 0-.895-.48l-3.977 2.652a1.5 1.5 0 0 1-.832.252H6a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h1.5m3.75 0 1.078 3.956a1.5 1.5 0 0 1-1.153 1.865l-.759.152a1.5 1.5 0 0 1-1.753-1.121L7.5 15m3.75 0H7.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Megaphone.displayName = 'Megaphone';
