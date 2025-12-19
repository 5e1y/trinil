import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const UsersSettings: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path  stroke-linecap="round" stroke-width="1.5" d="M10 14a5 5 0 1 1 2-9.584M10 14h2m-2 0H8a5 5 0 0 0-5 5 1 1 0 0 0 1 1h9.416M10 14a5.001 5.001 0 0 0 2-9.584M12 14h2m-2 0c.849 0 1.648.211 2.348.585M14 14h1m-1 0q.624-.001 1.204-.146M12 4.416a5 5 0 0 1 4.796 8.73M18 23a5 5 0 0 0 0-10m0 10a5 5 0 0 1-4.584-3M18 23a5 5 0 0 1-5-5m0 0c0-1.32.512-2.522 1.348-3.415M13 18c0 .711.148 1.387.416 2M13 18a5 5 0 0 1 5-5m0 0q-.624.001-1.204.146m0 0a5 5 0 0 0-1.592.708m0 0c-.312.211-.6.456-.856.73M18 16c.552 0 1.052.224 1.414.586M18 16v-1m0 1c-.552 0-1.052.224-1.414.586m2.828 0c.362.362.586.862.586 1.414m-.586-1.414L20 16m0 2h1m-1 0c0 .552-.224 1.052-.586 1.414M18 20v1m0-1c.552 0 1.052-.224 1.414-.586M18 20a2 2 0 0 1-1.414-.586M16 18h-1m1 0c0-.552.224-1.052.586-1.414M16 18c0 .552.224 1.052.586 1.414m0-2.828L16 16m3.414 3.414L20 20m-3.414-.586L16 20"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

UsersSettings.displayName = 'UsersSettings';
