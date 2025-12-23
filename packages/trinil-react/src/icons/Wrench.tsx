import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Wrench: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M3 7a4 4 0 0 0 4.352 3.985c.343-.03.695.062.938.305l4.42 4.42c.243.243.335.595.305.938Q13 16.822 13 17a4 4 0 0 0 4 4h.293a.5.5 0 0 0 .353-.854L15.54 18.04a.1.1 0 0 1-.026-.095l.471-1.887a.1.1 0 0 1 .073-.073l1.887-.471a.1.1 0 0 1 .095.026l2.106 2.107a.5.5 0 0 0 .854-.354V17a4 4 0 0 0-4.758-3.928A.27.27 0 0 1 16 13l-4.71-4.71c-.243-.243-.335-.595-.305-.938Q11 7.178 11 7a4 4 0 0 0-4-4h-.293a.5.5 0 0 0-.353.854L8.46 5.96a.1.1 0 0 1 .026.095l-.471 1.887a.1.1 0 0 1-.073.073l-1.887.471a.1.1 0 0 1-.095-.026L3.854 6.354A.5.5 0 0 0 3 6.707z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Wrench.displayName = 'Wrench';
