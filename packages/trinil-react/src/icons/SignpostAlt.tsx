import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const SignpostAlt: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M12 9.75h5.379a1.5 1.5 0 0 0 1.06-.44l1.5-1.5a1.5 1.5 0 0 0 0-2.12l-1.5-1.5a1.5 1.5 0 0 0-1.06-.44H12m0 6H6.75a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 1.5-1.5H12m0 6v3m0-10.5v1.5m0 9h5.25a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5H12m0-6H6.621a1.5 1.5 0 0 0-1.06.44l-1.5 1.5a1.5 1.5 0 0 0 0 2.12l1.5 1.5a1.5 1.5 0 0 0 1.06.44H12m0 0v3"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
SignpostAlt.displayName = 'SignpostAlt';
