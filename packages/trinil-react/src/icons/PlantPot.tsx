import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const PlantPot: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 14.25H6.75l.75 1.5a5 5 0 0 0 0 6h9a5 5 0 0 0 0-6l.75-1.5zm0 0v-4.5m0 0c2.877 2.057 6.838-.23 6.495-3.75a4.05 4.05 0 0 0-4.1-.4M12 9.75C9.123 11.807 5.162 9.52 5.505 6a4.05 4.05 0 0 1 4.1-.4M12 9.75c-1.752-.796-2.55-2.514-2.396-4.15M12 9.75c-.186-1.916.902-3.466 2.396-4.15m-4.792 0A4.05 4.05 0 0 1 12 2.25a4.05 4.05 0 0 1 2.396 3.35"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
PlantPot.displayName = 'PlantPot';
