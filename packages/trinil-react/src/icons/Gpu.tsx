import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Gpu: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M2.25 3.75V6m0 0h18a1.5 1.5 0 0 1 1.5 1.5V15a1.5 1.5 0 0 1-1.5 1.5h-4.5M2.25 6v10.5m0 0v3.75m0-3.75h3m0 0V18a1.5 1.5 0 0 0 1.5 1.5h7.5a1.5 1.5 0 0 0 1.5-1.5v-1.5m-10.5 0h10.5m3-5.25a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0m-8.25 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Gpu.displayName = 'Gpu';
