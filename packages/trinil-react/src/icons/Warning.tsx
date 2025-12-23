import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Warning: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M11.986 9v5.396m0 2.604v.5M10.922 4.203 3.21 18.755c-.432.816.155 1.8 1.074 1.8h15.564c.922 0 1.508-.992 1.069-1.808L13.065 4.195a1.213 1.213 0 0 0-2.143.008Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Warning.displayName = 'Warning';
