import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Grid: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 3h7.5A1.5 1.5 0 0 1 21 4.5V12m-9-9H4.5A1.5 1.5 0 0 0 3 4.5V12m9-9v9m0 9H4.5A1.5 1.5 0 0 1 3 19.5V12m9 9h7.5a1.5 1.5 0 0 0 1.5-1.5V12m-9 9v-9m0 0H3m9 0h9"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Grid.displayName = 'Grid';
