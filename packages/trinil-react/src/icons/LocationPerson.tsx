import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LocationPerson: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M12 12.75A3.747 3.747 0 0 1 8.256 9 3.747 3.747 0 0 1 12 5.25 3.747 3.747 0 0 1 15.744 9 3.747 3.747 0 0 1 12 12.75m0 0h1.133a4.117 4.117 0 0 1 4.117 4.117M12 12.75h-1.133a4.117 4.117 0 0 0-4.117 4.117m10.5 0L12 21.75l-5.25-4.883m10.5 0 .352-.328C23.086 11.44 19.483 2.25 12 2.25S.914 11.44 6.398 16.54l.352.327"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
LocationPerson.displayName = 'LocationPerson';
