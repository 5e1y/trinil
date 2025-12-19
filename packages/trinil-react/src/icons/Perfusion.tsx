import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Perfusion: React.FC<IconProps> = React.memo((props) => {
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
      dangerouslySetInnerHTML={{ __html: `<path d="M12 21h3.5m0 0H19m-3.5 0V5.997a2.997 2.997 0 1 0-5.994 0v.259m0 0A4.8 4.8 0 0 0 11.034 6a1.064 1.064 0 0 1 1.407 1.007v3.52a1.39 1.39 0 0 1-.941 1.314 6.3 6.3 0 0 1-1.994.334m0-5.92a4.8 4.8 0 0 1-1.532-.245l-.035-.012a1.09 1.09 0 0 0-1.433 1.033v3.47c0 .61.39 1.15.966 1.342l.035.011a6.3 6.3 0 0 0 1.999.321m0 0c.167 1.442.002 4.625-1.999 5.825"/>` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

Perfusion.displayName = 'Perfusion';
