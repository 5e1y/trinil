import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const UsersPlus: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M10 14a5 5 0 1 1 2-9.584M10 14h2m-2 0H8a5 5 0 0 0-5 5 1 1 0 0 0 1 1h9.416M10 14a5.001 5.001 0 0 0 2-9.584M12 14h2m-2 0c.849 0 1.648.211 2.348.585M14 14h1m-1 0q.624-.001 1.204-.146M12 4.416a5 5 0 0 1 4.796 8.73M18 18v-2.5m0 2.5h2.5M18 18v2.5m0-2.5h-2.5m1.296-4.854A5 5 0 1 1 13.416 20m3.38-6.854a5 5 0 0 0-1.592.708M15 14a5 5 0 0 0-.65.585m.65-.585q.101-.075.205-.146m-.856.73A4.98 4.98 0 0 0 13 18c0 .711.148 1.387.416 2"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

UsersPlus.displayName = 'UsersPlus';
