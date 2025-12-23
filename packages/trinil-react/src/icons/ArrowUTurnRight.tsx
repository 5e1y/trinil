import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ArrowUTurnRight: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M19.5 14.5 14 20m5.5-5.5L14 9m5.5 5.5h-10a5 5 0 0 1 0-10H12"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
ArrowUTurnRight.displayName = 'ArrowUTurnRight';
