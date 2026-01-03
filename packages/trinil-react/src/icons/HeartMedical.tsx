import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const HeartMedical: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M6.838 10.175a6.04 6.04 0 0 0-.488 5.27l.87 2.334c.888 2.381 3.241 3.971 5.88 3.971s4.992-1.59 5.88-3.97l.87-2.335c1.14-3.056-.321-5.943-3.015-7.377m-9.997 2.107C5.242 9.1 3.75 9.1 3.75 9.1m3.088 1.074a6.5 6.5 0 0 1 1.449-1.676m0 0a3.5 3.5 0 0 1-.125-.68m.125.68c.804 2.807 3.992 0 6.05-2.142.288-.3.6-.565.924-.798m-7.099 2.26a3.568 3.568 0 0 1 .68-2.41m-.68 2.41C5.862 6.466 3.75 6.466 3.75 6.466m13.085 1.602c-.869.702-1.535 1.848-.985 3.956l.079.188a4.53 4.53 0 0 1-.629 4.555m1.535-8.699c1.627-1.314 3.415-1.314 3.415-1.314m-4.989-1.195C17.666 3.83 20.25 3.83 20.25 3.83M15.261 5.56A3.83 3.83 0 0 0 13.31 4.05m-2.632.005A4 4 0 0 1 12 3.83c.46 0 .9.077 1.31.219m-2.633.005a3.84 3.84 0 0 0-1.834 1.353m1.834-1.353L9.998 2.25m3.311 1.8.69-1.8M8.842 5.408 7.05 4.201"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
HeartMedical.displayName = 'HeartMedical';
