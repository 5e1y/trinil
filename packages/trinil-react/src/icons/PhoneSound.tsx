import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const PhoneSound: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: `<path d="M12 9a3 3 0 0 1 2.121.879A3 3 0 0 1 15 12m6 0a9 9 0 0 0-9-9m6 9a6 6 0 0 0-6-6M4.347 9.55c2.336 4.765 5.892 8.341 10.184 10.248 1.338.595 2.871.175 3.906-.86.57-.569.985-1.249 1.243-1.746.209-.4.067-.875-.299-1.14L17.095 14.4a1 1 0 0 0-1.293.103l-.695.695a.206.206 0 0 1-.256.028 20 20 0 0 1-6.136-6.136.206.206 0 0 1 .028-.256l.697-.697a1 1 0 0 0 .105-1.29l-1.67-2.324c-.228-.318-.623-.472-.986-.324a5.3 5.3 0 0 0-1.74 1.159C4.036 6.467 3.654 8.14 4.346 9.55Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

PhoneSound.displayName = 'PhoneSound';
