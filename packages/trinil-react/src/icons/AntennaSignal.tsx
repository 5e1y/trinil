import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const AntennaSignal: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M16.977 2.25A8.99 8.99 0 0 1 21 9.75a8.97 8.97 0 0 1-2.636 6.364M7.024 2.25A8.99 8.99 0 0 0 3 9.75a8.97 8.97 0 0 0 2.636 6.364M15.318 4.75a6 6 0 0 1 2.682 5 5.98 5.98 0 0 1-1.757 4.243M8.683 4.75A6 6 0 0 0 6 9.75a5.98 5.98 0 0 0 1.757 4.243m5.138-1.379a3 3 0 0 1-1.79 0m1.79 0A3 3 0 0 0 15 9.75a2.997 2.997 0 0 0-3-3 2.997 2.997 0 0 0-2.121 5.121c.338.339.757.597 1.226.743m1.79 0 .959 3.068m-2.75-3.068-.958 3.068m-.959 3.068-.937 3h7.5l-.937-3m-5.626 0h5.626m-5.626 0 .96-3.068m4.666 3.068-.96-3.068m-3.707 0h3.708"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
AntennaSignal.displayName = 'AntennaSignal';
