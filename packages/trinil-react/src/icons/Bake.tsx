import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Bake: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M8 3H4a1 1 0 0 0-1 1v3m14-4h3a1 1 0 0 1 1 1v3m0 10v3a1 1 0 0 1-1 1h-3m-9 0H4a1 1 0 0 1-1-1v-3m9-5.5 5.968-3.011M12 11.5 6.016 8.508M12 11.5v6.882m5.968-9.893a.1.1 0 0 0-.023-.017l-5.498-2.748a1 1 0 0 0-.894 0L6.055 8.472a.1.1 0 0 0-.04.036m11.953-.02a.1.1 0 0 1 .032.074v6.32a1 1 0 0 1-.553.894l-5 2.5a1 1 0 0 1-.447.106M6.016 8.508A.1.1 0 0 0 6 8.562v6.32a1 1 0 0 0 .553.894l5 2.5a1 1 0 0 0 .447.106"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Bake.displayName = 'Bake';
