import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Box: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M20.802 7.616a1.5 1.5 0 0 1 .198.746v7.277a1.5 1.5 0 0 1-.744 1.295l-7.5 4.375a1.5 1.5 0 0 1-.756.204m8.802-13.897a1.5 1.5 0 0 0-.546-.55l-7.5-4.375a1.5 1.5 0 0 0-1.512 0l-7.5 4.375a1.5 1.5 0 0 0-.545.55m17.603 0L12 12.75m0 0L3.199 7.616M12 12.75v8.764M3.199 7.616c-.128.223-.199.48-.199.746v7.277a1.5 1.5 0 0 0 .744 1.295l7.5 4.375c.234.136.495.204.756.204"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Box.displayName = 'Box';
