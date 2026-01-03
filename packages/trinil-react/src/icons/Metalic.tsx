import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Metalic: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M21.239 8.876c-1.148 1.59-2.554 2.51-3.902 3.144-3.055 1.438-4.251 1.265-6.033 3.27-1.76 1.98-2.035 4.358-1.798 6.138M21.24 8.876a9.78 9.78 0 0 0-4.767-5.542m4.767 5.542c.331.98.511 2.031.511 3.124 0 1.124-.19 2.204-.54 3.21a9.75 9.75 0 0 1-2.316 3.684 9.75 9.75 0 0 1-3.685 2.315A9.7 9.7 0 0 1 12 21.75a9.8 9.8 0 0 1-2.494-.322m6.966-18.094c-.224.81-.475 1.333-.698 1.679-.336.52-.726.82-1.408 1.14-1.225.578-5.206 1.52-8.202 4.89-1.485 1.67-2.409 3.46-2.931 5.228M16.472 3.334A9.7 9.7 0 0 0 12 2.25c-5.385 0-9.75 4.365-9.75 9.75a9.7 9.7 0 0 0 .983 4.27m6.273 5.158a9.77 9.77 0 0 1-6.273-5.157"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Metalic.displayName = 'Metalic';
