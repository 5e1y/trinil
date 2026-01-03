import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Pulse: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M2.25 12H5.7a1.5 1.5 0 0 0 1.409-.987l2.407-6.62a.977.977 0 0 1 1.88.16l2.72 14.96a.899.899 0 0 0 1.768 0l1.142-6.281A1.5 1.5 0 0 1 18.502 12h3.248"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Pulse.displayName = 'Pulse';
