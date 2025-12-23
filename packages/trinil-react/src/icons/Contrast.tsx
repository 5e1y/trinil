import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Contrast: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12.5 12H21m0 0a9 9 0 0 0-.5-2.965M21 12c0 1.052-.18 2.062-.512 3m.012-5.965h-8m8 0A9 9 0 0 0 18.708 6m0 0a9 9 0 1 0 0 12m0-12H12.5m7.988 9H12.5m7.988 0a9 9 0 0 1-1.78 3m0 0H12.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Contrast.displayName = 'Contrast';
