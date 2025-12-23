import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const AlignStart: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M3 4.5v15M6 8v1.5a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1Zm0 6.5V16a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-1.5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
AlignStart.displayName = 'AlignStart';
