import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Book: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m12 19.5.554-.317a8.75 8.75 0 0 1 9.196.317V6a8.75 8.75 0 0 0-9.196-.316L12 6m0 13.5-.554-.317a8.75 8.75 0 0 0-9.196.317V6a8.75 8.75 0 0 1 9.196-.316L12 6m0 13.5V6"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Book.displayName = 'Book';
