import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const StomachCheck: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M21.384 12.158c.598-1.366.49-2.99-.396-4.269l-.265-.383c-.705-1.018-1.881-1.623-2.73-1.699-.848-.076-1.733-.258-2.335-.86a2.2 2.2 0 0 1-.645-1.555L15.02 3m-3.749 0-.007 1.036c0 .875.348 1.714.966 2.333.667.666.575 1.78-.275 2.187-1.564.75-2.78 1.12-5.153.996-2.86-.15-5.14 2.487-4.484 5.275l.092.394a4.6 4.6 0 0 0 1.011 1.97c.201.23.334.517.334.823v2.997m7.514-2.506q-1.276.24-2.617.279c-.622.018-1.14.513-1.14 1.136v1.09m6.738-2.26 2.894 2.894a.15.15 0 0 0 .212 0l4.91-4.91"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
StomachCheck.displayName = 'StomachCheck';
