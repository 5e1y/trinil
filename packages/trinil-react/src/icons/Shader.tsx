import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Shader: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M12.382 21.743q-.19.007-.382.007c-5.385 0-9.75-4.365-9.75-9.75S6.615 2.25 12 2.25s9.75 4.365 9.75 9.75q0 .192-.007.382M6 12a6 6 0 0 1 6-6m6.374 14.85a2.475 2.475 0 0 1 0-4.95m0 4.95a2.475 2.475 0 0 0 0-4.95m0 4.95v1.65m0-6.6v-1.65m4.134 4.117h-1.65m-4.95 0h-1.65m7.047 2.92-1.167-1.168m-3.5-3.5-1.167-1.166m0 5.845 1.167-1.167m3.5-3.5 1.167-1.167"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Shader.displayName = 'Shader';
