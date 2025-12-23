import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const BrightnessMedium: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M12 6V3.5m6 8.5h2.5M12 18v2.5M6 12H3.5m12.743-4.243L18.01 5.99m-1.767 10.253 1.767 1.767M7.757 16.243 5.99 18.01M7.757 7.757 5.99 5.99M16 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0Zm-1.172 2.828a4 4 0 1 0-5.656-5.656 4 4 0 0 0 5.656 5.656Z"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
BrightnessMedium.displayName = 'BrightnessMedium';
