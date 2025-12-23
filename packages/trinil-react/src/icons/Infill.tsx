import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Infill: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M4 10V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v5M4 10v4m0-4 3.293-3.293a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 0 1.414 0l2.586-2.586a1 1 0 0 1 1.414 0L20 10M4 14v4m0-4 3.293-3.293a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 0 1.414 0l2.586-2.586a1 1 0 0 1 1.414 0L20 14M4 18v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1M4 18l3.293-3.293a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 0 1.414 0l2.586-2.586a1 1 0 0 1 1.414 0L20 18m0 0v-4m0 0v-4"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Infill.displayName = 'Infill';
