import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LocationPerson: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M12 10.5v.5m0-.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0 .5v3m0-3s1.173.782 1.79 2M12 11s-1.173.782-1.79 2M12 14s1.116.833 1.311 2.5M12 14s-1.25.833-1.468 2.5m.715 3.64-4.28-4.892a7.39 7.39 0 0 1-1.818-5.232l.026-.524a6.833 6.833 0 0 1 13.65 0l.026.524a7.39 7.39 0 0 1-1.818 5.232l-4.28 4.892a1 1 0 0 1-1.506 0Z"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

LocationPerson.displayName = 'LocationPerson';
