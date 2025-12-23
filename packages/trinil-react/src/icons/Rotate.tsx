import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Rotate: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M16.77 18.423A8 8 0 1 0 12 20m4.77-1.577L21 18.5m-4.23-.077V14m-6.27-2a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Rotate.displayName = 'Rotate';
