import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const TimerPlus: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', strokeWidth = 1.5, className, title, ariaLabel } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" width={size} height={size} className={className} role="img" aria-label={ariaLabel} dangerouslySetInnerHTML={{ __html: `<path stroke-miterlimit="1.788" d="M5.25 18.75H3l1.338-9.812a7.733 7.733 0 0 1 15.324 0l.357 2.62M5.25 18.75v1.5a1.5 1.5 0 0 0 1.5 1.5h5.637m-7.137-3h6.041M9.65 13.588a4.48 4.48 0 0 0 2.75.645m-2.75-.645c.44.028.89-.127 1.226-.463l4.5-4.5c.336-.336.49-.786.463-1.226m-6.189 6.189a1.59 1.59 0 0 1-1.024-.463 1.59 1.59 0 0 1-.463-1.024m0 0a4.5 4.5 0 0 1 6.189-6.189m-6.189 6.189c-.028-.44.127-.89.463-1.226l4.5-4.5c.336-.336.786-.49 1.226-.463M15.838 7.4c.42.684.662 1.49.662 2.351 0 .624-.127 1.218-.357 1.758M15.838 7.4a1.59 1.59 0 0 0-.463-1.024 1.59 1.59 0 0 0-1.024-.463M18.375 22.5v-4.125m0 0V14.25m0 4.125H22.5m-4.125 0H14.25"/>` }}>
      {title && <title>{title}</title>}
    </svg>
  );
});
TimerPlus.displayName = 'TimerPlus';
