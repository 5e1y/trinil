import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Lamp1: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 12H5.184a1.5 1.5 0 0 1-1.4-2.038l2.596-6.75a1.5 1.5 0 0 1 1.4-.962h8.44a1.5 1.5 0 0 1 1.4.962l2.596 6.75a1.5 1.5 0 0 1-1.4 2.038H15.75M12 12v9.75M12 12h3.75M12 21.75h5.25m-5.25 0H6.75m9-9.75v5.25"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Lamp1.displayName = 'Lamp1';
