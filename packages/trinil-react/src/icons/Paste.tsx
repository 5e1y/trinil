import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Paste: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M8 6.5V6a1 1 0 0 1 1-1h2m6 12.5h1.5a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2M11 5v-.5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1V5M11 5v.5a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1V5m-11 15.5h8a1 1 0 0 0 1-1v-6.086a1 1 0 0 0-.293-.707l-3.414-3.414A1 1 0 0 0 10.086 9H5.5a1 1 0 0 0-1 1v9.5a1 1 0 0 0 1 1Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Paste.displayName = 'Paste';
