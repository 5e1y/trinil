import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const EyeClosed: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M21.75 8.25c-4.586 7.055-14.914 7.055-19.5 0M21 13.5l.75.75m-4.5 1.5.75 1.5m-6-.75v1.769M6.75 15.75 6 17.25M3 13.5l-.75.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
EyeClosed.displayName = 'EyeClosed';
