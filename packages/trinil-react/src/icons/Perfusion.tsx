import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Perfusion: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M20.25 21.75h-4.5m0 0h-4.5m4.5 0V6c0-2.071-1.7-3.75-3.771-3.75-2.048 0-3.729 1.66-3.729 3.708m0 0c.63 0 1.26-.089 1.871-.266.536-.156 1.129.214 1.129.772v3.859c0 .568-.317 1.101-.855 1.283a6.7 6.7 0 0 1-2.145.352m0-6c-.63 0-1.26-.089-1.872-.266-.535-.156-1.128.214-1.128.772v3.859c0 .568.317 1.101.855 1.283.696.235 1.42.352 2.145.352m0 0c0 2.292.75 3.792-1.5 5.292"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Perfusion.displayName = 'Perfusion';
