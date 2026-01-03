import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const Cut: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path d="M7.371 8.871a3 3 0 1 1-4.243-4.243 3 3 0 0 1 4.243 4.243m0 0L10.5 12m0 0 5.25 5.25M10.5 12l-3.129 3.129M10.5 12l5.25-5.25m-4.5 0v-1.5a1.5 1.5 0 0 1 1.5-1.5h5.379a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 1 .439 1.061V18.75a1.5 1.5 0 0 1-1.5 1.5h-7.5a1.5 1.5 0 0 1-1.5-1.5v-1.5m-3.879-2.121a3 3 0 1 1-4.243 4.243 3 3 0 0 1 4.243-4.243"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
Cut.displayName = 'Cut';
