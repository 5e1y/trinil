import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Cut: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M10 7V5.5a1 1 0 0 1 1-1h5.586a1 1 0 0 1 .707.293l3.414 3.414a1 1 0 0 1 .293.707V18.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-2M14 8l-4 4m0 0 4 4m-4-4-3.586 3.586M10 12 6.414 8.414M3 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Cut.displayName = 'Cut';
