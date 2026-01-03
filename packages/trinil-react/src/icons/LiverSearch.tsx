import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LiverSearch: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="m22.5 22.5-2.088-2.088m0 0a3.61 3.61 0 1 0-5.105-5.104 3.61 3.61 0 0 0 5.105 5.104m-8.507-5.36-4.279 4.32a3.05 3.05 0 0 1-2.163.925c-1.758 0-3.183-1.553-3.183-3.47v-6.224c0-2.508 1.598-4.68 3.844-5.223a4.5 4.5 0 0 1 1.944-.041l4.906.972m-1.07 8.741h.022m-.021 0c-1.284-3.73.178-7.382 1.07-8.741m0 0 4.681-.51a3.2 3.2 0 0 1 1.309.127l1.344.419c.992.309 1.6 1.395 1.398 2.497a2.16 2.16 0 0 1-.96 1.45l-1.67 1.041"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
LiverSearch.displayName = 'LiverSearch';
