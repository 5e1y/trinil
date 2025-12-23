import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Dna: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M18 21v-.675q0-.163-.006-.325M6 3v.676q0 .162.006.324M6 21v-.675q0-.163.006-.325M18 3v.675q0 .163-.006.325m0 0H6.006m11.988 0a8.8 8.8 0 0 1-.648 3M6.006 4a8.8 8.8 0 0 0 .648 3m10.692 0H6.654m10.692 0a8.8 8.8 0 0 1-1.558 2.5M6.654 7a8.8 8.8 0 0 0 1.558 2.5M12 12a8.76 8.76 0 0 0 3.788-2.5M12 12a8.76 8.76 0 0 1-3.788-2.5M12 12a8.76 8.76 0 0 1 3.788 2.5M12 12a8.76 8.76 0 0 0-3.788 2.5m9.134 2.5H6.654m10.692 0c.384.938.61 1.95.648 3m-.648-3a8.8 8.8 0 0 0-1.558-2.5M6.654 17a8.8 8.8 0 0 0-.648 3m.648-3a8.8 8.8 0 0 1 1.558-2.5m9.782 5.5H6.006m2.206-5.5h7.576m0-5H8.212"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Dna.displayName = 'Dna';
