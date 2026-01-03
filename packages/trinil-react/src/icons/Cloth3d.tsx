import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Cloth3d: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M15.431 13.124h.002c.433.234.746.689.746 1.249a1.27 1.27 0 0 0 1.872 1.119L21.75 13.5 12 8.25 9.19 9.763m6.241 3.361a1.4 1.4 0 0 0-1.342.001q-.39.212-.718.495m2.06-.496L9.19 9.764m4.181 3.856A3.97 3.97 0 0 0 12 16.623v2.127L2.25 13.5v-2.127c0-1.462.802-2.805 2.09-3.498a1.4 1.4 0 0 1 1.35.003l3.5 1.885m4.181 3.857 3.476 1.872"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Cloth3d.displayName = 'Cloth3d';
