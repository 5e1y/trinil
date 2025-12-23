import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const KeyframeHoldLinearOut: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 4h1.086a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-.707.293H12m0-16v16m0-16H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
KeyframeHoldLinearOut.displayName = 'KeyframeHoldLinearOut';
