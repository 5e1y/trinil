import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Chromosome: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M17 6v.665c0 1.495-.594 2.929-1.651 3.986l-.067.067a.4.4 0 0 0 0 .564A5.86 5.86 0 0 1 17 15.43V16m0-10V4.75a1.75 1.75 0 0 0-3.5 0V6M17 6h-3.5m0 0v1.5a1.5 1.5 0 0 1-3 0V4.75a1.75 1.75 0 1 0-3.5 0v1.915c0 1.495.594 2.929 1.651 3.986l.067.067a.4.4 0 0 1 0 .564A5.86 5.86 0 0 0 7 15.43v3.821a1.75 1.75 0 1 0 3.5 0V14.5a1.5 1.5 0 0 1 3 0V16m3.5 0h-3.5m3.5 0v2m-3.5-2v2m3.5 0v1.25a1.75 1.75 0 1 1-3.5 0V18m3.5 0h-3.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Chromosome.displayName = 'Chromosome';
