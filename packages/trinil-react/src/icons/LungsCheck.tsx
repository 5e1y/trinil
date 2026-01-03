import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LungsCheck: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M20.865 11.887a18 18 0 0 0-.58-2.968c-.21-.76-.877-2.011-1.054-2.31-.91-1.531-1.178-2.856-2.859-3.324-.562-.156-1.145.172-1.287.723l-.6 2.338c-.119.459-.543.781-1.03.781h-1.476m1.373 5.339-.085-.334a1.186 1.186 0 0 0-1.157-.878c-.658 0-1.192.519-1.192 1.159 0 0 .006.551 0 .905-.039 2.323-.759 5.904-.759 5.904-.159 1.235-1.413 2.041-2.644 1.7l-.11-.032C4.532 20.093 3 17.412 3 14.508c0-2.221.42-3.769.86-5.367.314-1.137.605-2.013.98-2.859.772-1.733 1.086-2.527 2.542-2.999a.96.96 0 0 1 1.193.553l1.011 2.623c.155.402.551.67.994.67h1.4m0 0V3m2.27 15.75 2.894 2.894a.15.15 0 0 0 .212 0l4.91-4.91"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
LungsCheck.displayName = 'LungsCheck';
