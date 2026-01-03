import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Camera: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M20.25 20.25H3.75a1.5 1.5 0 0 1-1.5-1.5V7.5A1.5 1.5 0 0 1 3.75 6h2.379a1.5 1.5 0 0 0 1.06-.44l1.372-1.37a1.5 1.5 0 0 1 1.06-.44h4.758a1.5 1.5 0 0 1 1.06.44l1.372 1.37a1.5 1.5 0 0 0 1.06.44h2.379a1.5 1.5 0 0 1 1.5 1.5v11.25a1.5 1.5 0 0 1-1.5 1.5"/><path d="M12 8.25a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Camera.displayName = 'Camera';
