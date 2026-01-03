import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Bacteria: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M20.861 8.83c.576.919.91 2.005.91 3.17a5.94 5.94 0 0 1-.865 3.095.11.11 0 0 0 .016.135l.185.185a1.628 1.628 0 1 1-2.303 2.303l-.307-.307a.11.11 0 0 0-.125-.021 5.95 5.95 0 0 1-2.572.58h-2.063a.11.11 0 0 0-.109.11v.609a1.628 1.628 0 1 1-3.257 0v-.61a.11.11 0 0 0-.108-.108H8.2a5.95 5.95 0 0 1-2.572-.581.11.11 0 0 0-.125.02l-.307.308a1.628 1.628 0 1 1-2.303-2.302l.185-.186a.11.11 0 0 0 .016-.135A5.94 5.94 0 0 1 2.229 12c0-1.165.334-2.25.91-3.17m17.722 0 .246-.246a1.628 1.628 0 1 0-2.303-2.303l-.362.363M20.86 8.83l-1.13 1.13m-1.29-3.317a5.95 5.95 0 0 0-2.641-.615h-2.063a.11.11 0 0 1-.109-.109v-.609a1.628 1.628 0 0 0-3.257 0v.61c0 .06-.048.108-.108.108H8.2c-.948 0-1.845.221-2.642.615m12.884 0-1.014 1.014M3.14 8.83l-.246-.247a1.628 1.628 0 0 1 2.303-2.303l.362.363M3.14 8.83l1.13 1.13m1.29-3.317 1.013 1.014M8.2 10.464a1.63 1.63 0 1 0 2.079 2.079m4.978-.44a1.629 1.629 0 1 1-2.106 2.068"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Bacteria.displayName = 'Bacteria';
