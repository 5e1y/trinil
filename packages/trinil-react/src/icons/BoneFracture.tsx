import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BoneFracture: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M6 19a2 2 0 1 0 3.483-1.342.104.104 0 0 1 .002-.143l4.344-4.344a.1.1 0 0 0-.07-.171H10.04a.1.1 0 0 0-.07.03l-2.486 2.485a.104.104 0 0 1-.143.002A2 2 0 1 0 6 19Zm0 0c0-.364.097-.706.268-1M19.416 5.518a2 2 0 1 1-2.198 3.017.104.104 0 0 0-.139-.035l-3.044 1.758a.1.1 0 0 1-.076.01l-3.59-.962a.1.1 0 0 1-.025-.184l5.32-3.071a.104.104 0 0 0 .04-.138 2 2 0 1 1 3.712-.395Zm0 0c-.096.355-.28.662-.524.903M17.5 16l1 1m0-4.5h2M6.5 8l-1-1m0 4.5h-2"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
BoneFracture.displayName = 'BoneFracture';
