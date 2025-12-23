import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const DistributeVertical: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M19.5 20h-15m15-16h-15M17 13.75H7a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
DistributeVertical.displayName = 'DistributeVertical';
