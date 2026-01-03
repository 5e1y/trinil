import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LabFlask: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M16.5 17.25h-3m3-3.75h-3m3-3.75h-3m3.75-6.839V2.25H6.75v.661c0 .552.128 1.096.375 1.589S7.5 5.537 7.5 6.089v2.953a3 3 0 0 1-.317 1.341l-3.116 6.234a3 3 0 0 0-.317 1.341v.792a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-.792a3 3 0 0 0-.317-1.341l-3.116-6.234a3 3 0 0 1-.317-1.341V6.089c0-.552.128-1.096.375-1.589a3.55 3.55 0 0 0 .375-1.589"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
LabFlask.displayName = 'LabFlask';
