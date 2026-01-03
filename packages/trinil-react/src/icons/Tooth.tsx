import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Tooth: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M13.663 2.705c2.842-1.57 6.041 1.266 5.27 4.673l-1.197 3.654a20.3 20.3 0 0 0-.962 4.995l-.233 3.58c-.141 1.017-1.432 1.117-1.7.131-.245-.907-1.18-2.798-2.003-4.254-.387-.685-1.289-.685-1.676 0-.794 1.404-1.742 3.734-1.954 5.373-.164 1.266-1.83 1.223-1.94-.05l-.21-3.408s-.551-4.134-.988-5.582L5.066 7.378c-.77-3.407 2.43-6.244 5.27-4.673a3.4 3.4 0 0 0 3.327 0m0 0c-1.047.578-3.147 2.262-3.147 4.821"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Tooth.displayName = 'Tooth';
