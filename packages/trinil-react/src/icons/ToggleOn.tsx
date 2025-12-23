import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ToggleOn: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M15 18H9A6 6 0 0 1 9 6h6a6 6 0 0 1 0 12Zm0-9.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" clip-rule="evenodd"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
ToggleOn.displayName = 'ToggleOn';
