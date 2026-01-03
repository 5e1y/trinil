import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const LocationPlus: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M12 14.25a3.747 3.747 0 0 1-3.744-3.75A3.747 3.747 0 0 1 12 6.75a3.747 3.747 0 0 1 3.744 3.75m4.439 1.11c.594-4.578-2.785-9.36-8.183-9.36-7.483 0-11.086 9.19-5.602 14.29L12 21.75l.242-.225m6.133.975v-4.125m0 0V14.25m0 4.125H22.5m-4.125 0H14.25"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
LocationPlus.displayName = 'LocationPlus';
