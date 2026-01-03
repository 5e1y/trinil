import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Waypoint: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="m9 9.75-5.25 1.5v9L9 18.75m0-9v9m0-9 1.235.309M9 18.75l6 1.5m0-9 5.25-1.5v9L15 20.25m0-9v9m0-9-1.889-.472m0 0L14.455 9.3c1.937-2.132.425-5.55-2.455-5.55S7.608 7.168 9.545 9.3l.69.759m2.876.719L12 12l-1.765-1.941"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Waypoint.displayName = 'Waypoint';
