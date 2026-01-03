import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const PhoneOff: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M9.37 10.13a25 25 0 0 1-1.292-1.823.25.25 0 0 1 .035-.314l.86-.853a1.215 1.215 0 0 0 .13-1.58L7.04 2.716c-.283-.39-.77-.578-1.219-.397A6.6 6.6 0 0 0 3.67 3.738c-1.374 1.36-1.847 3.407-.991 5.134A29.8 29.8 0 0 0 5.72 13.78m5.77-1.27a24.7 24.7 0 0 0 4.172 3.308c.1.063.232.049.317-.035l.858-.85a1.245 1.245 0 0 1 1.599-.126l2.825 2.024c.451.323.627.906.37 1.395-.32.609-.834 1.441-1.537 2.137-1.279 1.268-3.174 1.781-4.828 1.054-2.761-1.216-5.276-2.984-7.46-5.224m3.684-3.683L21.75 2.25M11.49 12.51l-3.683 3.683m0 0L2.25 21.75"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
PhoneOff.displayName = 'PhoneOff';
