import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Fight: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M15.799 8.5a2.5 2.5 0 1 0 3.403-3.664A2.5 2.5 0 0 0 15.798 8.5Zm0 0L11 13.168M15.799 8.5l1.093 3.337a1 1 0 0 1-.013.658L16 14.875M15.799 8.5l-3.695-.285a1 1 0 0 1-.842-.603l-1.015-2.366M11 13.168l-3.789-1.894a1 1 0 0 0-.447-.106H3.5m7.5 2 .94 3.758a1 1 0 0 1 0 .485l-.773 3.089"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Fight.displayName = 'Fight';
