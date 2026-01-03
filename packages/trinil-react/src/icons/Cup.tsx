import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Cup: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="m18.153 20.422 1.904-16.5a1.5 1.5 0 0 0-1.49-1.672H5.433a1.5 1.5 0 0 0-1.49 1.672l1.904 16.5a1.5 1.5 0 0 0 1.49 1.328h9.326a1.5 1.5 0 0 0 1.49-1.328"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Cup.displayName = 'Cup';
