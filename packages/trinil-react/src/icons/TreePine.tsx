import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const TreePine: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 21v-2.5m0 0c-3.105.444-7.889-2.433-.753-15.057A.87.87 0 0 1 12 3c.31 0 .6.174.753.443 7.136 12.624 2.352 15.5-.753 15.057Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
TreePine.displayName = 'TreePine';
