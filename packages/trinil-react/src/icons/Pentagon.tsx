import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Pentagon: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="m3.096 9.1 7.99-6.146a1.5 1.5 0 0 1 1.829 0l7.989 6.145a1.5 1.5 0 0 1 .509 1.663l-3.071 9.212A1.5 1.5 0 0 1 16.919 21H7.08a1.5 1.5 0 0 1-1.423-1.026l-3.07-9.211a1.5 1.5 0 0 1 .508-1.664"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Pentagon.displayName = 'Pentagon';
