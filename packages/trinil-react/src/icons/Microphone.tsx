import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Microphone: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M18.75 11.25V12A6.75 6.75 0 0 1 12 18.75m-6.75-7.5V12A6.75 6.75 0 0 0 12 18.75m-3.75 3H12m0 0h3.75m-3.75 0v-3M8.25 6v6a3.75 3.75 0 1 0 7.5 0V6a3.75 3.75 0 1 0-7.5 0Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Microphone.displayName = 'Microphone';
