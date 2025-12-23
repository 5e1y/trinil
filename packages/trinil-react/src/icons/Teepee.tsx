import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Teepee: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m12 16-1.972 3.945a.1.1 0 0 1-.09.055H4.175a.1.1 0 0 1-.086-.15L13.412 4M12 16l1.972 3.945a.1.1 0 0 0 .09.055h5.763a.1.1 0 0 0 .086-.15L10.588 4M12 16l-1.043-2"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Teepee.displayName = 'Teepee';
