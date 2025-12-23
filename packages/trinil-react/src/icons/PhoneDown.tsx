import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const PhoneDown: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m14 10 5.5-5.5M14 10V5m0 5h5M4.347 9.55c2.336 4.765 5.892 8.341 10.184 10.249 1.338.594 2.871.174 3.906-.86.57-.57.985-1.25 1.243-1.747.209-.4.067-.875-.299-1.14L17.095 14.4a1 1 0 0 0-1.293.103l-.695.695a.206.206 0 0 1-.256.028 20 20 0 0 1-6.136-6.136.206.206 0 0 1 .028-.256l.697-.697a1 1 0 0 0 .105-1.29l-1.67-2.324c-.228-.318-.623-.472-.986-.324a5.3 5.3 0 0 0-1.74 1.159C4.036 6.467 3.654 8.14 4.346 9.55Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
PhoneDown.displayName = 'PhoneDown';
