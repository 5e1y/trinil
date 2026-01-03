import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Hexagon: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="m3.744 7.066 7.5-4.375a1.5 1.5 0 0 1 1.512 0l7.5 4.375A1.5 1.5 0 0 1 21 8.362v7.277a1.5 1.5 0 0 1-.744 1.295l-7.5 4.375a1.5 1.5 0 0 1-1.512 0l-7.5-4.375A1.5 1.5 0 0 1 3 15.638V8.363a1.5 1.5 0 0 1 .744-1.296"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Hexagon.displayName = 'Hexagon';
