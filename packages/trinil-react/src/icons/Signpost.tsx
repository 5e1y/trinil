import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Signpost: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M11.25 5.25h5.379a1.5 1.5 0 0 1 1.06.44l2.25 2.25a1.5 1.5 0 0 1 0 2.12l-2.25 2.25a1.5 1.5 0 0 1-1.06.44H11.25m0-7.5h-6a1.5 1.5 0 0 0-1.5 1.5v4.5a1.5 1.5 0 0 0 1.5 1.5h6m0-7.5v-3m0 10.5v9"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Signpost.displayName = 'Signpost';
