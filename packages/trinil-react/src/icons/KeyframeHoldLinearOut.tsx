import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const KeyframeHoldLinearOut: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M11.871 3.75H3.618a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5h8.253m0-16.5H13.5a1.5 1.5 0 0 1 1.06.44l6.75 6.75a1.5 1.5 0 0 1 0 2.12l-6.75 6.75a1.5 1.5 0 0 1-1.06.44H11.87m0-16.5v16.5"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
KeyframeHoldLinearOut.displayName = 'KeyframeHoldLinearOut';
