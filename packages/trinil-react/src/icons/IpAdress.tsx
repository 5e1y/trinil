import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const IpAdress: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M12 14a4 4 0 0 0 4-4m-4 4a4 4 0 0 1-4-4m4 4a6.03 6.03 0 0 0 1.5-4M12 14a6.06 6.06 0 0 1-1.503-4M16 10a4 4 0 0 0-4-4m4 4h-2.5M8 10a4 4 0 0 1 4-4m-4 4h2.497M12 6a6.1 6.1 0 0 1 1.5 4M12 6a6.06 6.06 0 0 0-1.503 4m3.002 0h-3.002m-3.53 5.248 4.958 5.666a.1.1 0 0 0 .15 0l4.958-5.666a7.39 7.39 0 0 0 1.818-5.232l-.026-.524a6.833 6.833 0 0 0-13.65 0l-.026.524a7.39 7.39 0 0 0 1.818 5.232Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

IpAdress.displayName = 'IpAdress';
