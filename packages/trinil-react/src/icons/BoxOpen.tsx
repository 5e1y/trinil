import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BoxOpen: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="m12 4.366 2.572-1.5 7.186 4.192-2.572 1.5M12 4.366l-2.572-1.5-7.186 4.192 2.572 1.5M12 4.366 4.814 8.558M12 4.366l7.186 4.192M12 12.75 4.814 8.558M12 12.75l7.186-4.192M12 12.75l2.571 1.5 4.615-2.692M12 12.75l-2.571 1.5-4.615-2.692M12 12.75v8.013M4.814 8.558l-2.572 1.5 2.572 1.5m14.372-3 2.572 1.5-2.572 1.5m-14.372 0v4.388a1.5 1.5 0 0 0 .744 1.296l5.686 3.317a1.5 1.5 0 0 0 .756.204m7.186-9.205v4.388a1.5 1.5 0 0 1-.744 1.296l-5.686 3.317a1.5 1.5 0 0 1-.756.204"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
BoxOpen.displayName = 'BoxOpen';
