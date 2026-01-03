import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Material: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="m18.267 10.875 3.483 1.875-3.482 1.875m-.001-3.75a9 9 0 0 0 2.932-2.61l.551-.765L12 2.25l-.551.766A9 9 0 0 1 8.41 5.683L2.25 9l3.482 1.875m12.535 0q-.052.03-.106.057L12 14.25l-6.268-3.375m12.536 3.75L12 18l-6.268-3.375m12.536 0L21.75 16.5 12 21.75 2.25 16.5l3.482-1.875m0 0L2.25 12.75l3.482-1.875"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Material.displayName = 'Material';
