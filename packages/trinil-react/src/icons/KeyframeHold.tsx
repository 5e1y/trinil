import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const KeyframeHold: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7m0-16h7a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-7m0-16v16"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
KeyframeHold.displayName = 'KeyframeHold';
