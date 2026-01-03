import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Graph: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M2.25 3.75v15a1.5 1.5 0 0 0 1.5 1.5h18M6 8.25h3.573a1.5 1.5 0 0 1 1.342.83l1.235 2.47m0 0 1.765 3.53a1.5 1.5 0 0 0 2.541.228l.344-.458a1.5 1.5 0 0 1 1.2-.6h3.75m-9.6-2.7-1.968 3.444a1.5 1.5 0 0 1-1.302.756H6m6.15-4.2 3.168-5.544a1.5 1.5 0 0 1 1.303-.756h5.129"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Graph.displayName = 'Graph';
