import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ToothCheck: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M13.663 2.705c2.842-1.57 6.041 1.266 5.27 4.673l-1.197 3.654-.073.226m-4-8.553a3.4 3.4 0 0 1-3.326 0c-2.842-1.57-6.042 1.266-5.27 4.673l1.003 4.439c.437 1.448.988 5.582.988 5.582l.21 3.408c.11 1.273 1.776 1.316 1.94.05.212-1.639 1.16-3.969 1.954-5.373a.97.97 0 0 1 .804-.513m1.697-12.266c-1.047.578-3.147 2.262-3.147 4.821M14.25 18.75l2.894 2.894a.15.15 0 0 0 .212 0l4.91-4.91"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
ToothCheck.displayName = 'ToothCheck';
