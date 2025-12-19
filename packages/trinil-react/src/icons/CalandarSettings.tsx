import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const CalandarSettings: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M4 9V7a2 2 0 0 1 2-2h1M4 9v9a2 2 0 0 0 2 2h7.416M4 9h16m0 0V7a2 2 0 0 0-2-2h-1m3 4v4.416M17 5V3.5M17 5H7m10 0v1.5M7 5V3.5M7 5v1.5m13 6.916A5 5 0 0 0 13.416 20M20 13.416A5.001 5.001 0 1 1 13.416 20M18 16c.552 0 1.052.224 1.414.586M18 16v-1m0 1c-.552 0-1.052.224-1.414.586m2.828 0c.362.362.586.862.586 1.414m-.586-1.414L20 16m0 2h1m-1 0c0 .552-.224 1.052-.586 1.414M18 20v1m0-1c.552 0 1.052-.224 1.414-.586M18 20a2 2 0 0 1-1.414-.586M16 18h-1m1 0c0-.552.224-1.052.586-1.414M16 18c0 .552.224 1.052.586 1.414m0-2.828L16 16m3.414 3.414L20 20m-3.414-.586L16 20"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

CalandarSettings.displayName = 'CalandarSettings';
