import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const File3d: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12.387 21.75H5.25a1.5 1.5 0 0 1-1.5-1.5V3.75a1.5 1.5 0 0 1 1.5-1.5h7.5m7.5 9.384V9.75m0 0h-6a1.5 1.5 0 0 1-1.5-1.5v-6m7.5 7.5-7.5-7.5m5.625 20.25 4.125-2.25V16.5m-4.125 6-4.125-2.25V16.5m4.125 6v-3.75M22.5 16.5l-4.125-2.25-4.125 2.25m8.25 0-4.125 2.25M14.25 16.5l4.125 2.25"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
File3d.displayName = 'File3d';
